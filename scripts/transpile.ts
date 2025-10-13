#!/usr/bin/env node
import fs from "fs";
import path from "path";

/**
 * Yoruba → Java Transpiler CLI (with Unicode normalization)
 *
 * Usage examples:
 *   npm run transpile
 *   npm run transpile -- --scan "C:\\MyProject"
 */

// ----------------- CLI arg parsing -----------------
function parseArgs() {
  const args = process.argv.slice(2);
  const opts: { [k: string]: string | boolean } = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--scan" || a === "-s") {
      opts.scan = args[++i];
    } else if (a === "--out" || a === "-o") {
      opts.out = args[++i];
    } else if (a === "--lexicon") {
      opts.lexicon = args[++i];
    } else if (a === "--help" || a === "-h") {
      opts.help = true;
    }
  }
  return opts;
}

function printHelp(scriptPath: string) {
  const defaultLex = path.resolve(path.dirname(scriptPath), "..", "data", "lexicon-v1.0.1.json");
  console.log(`
Yoruba -> Java Transpiler

Usage:
  node "<path-to>/transpile.js" [--scan <path>] [--out <path>] [--lexicon <path>]

Options:
  --scan, -s    Directory to scan for .yjava files. Default: current working directory.
  --out, -o     Output folder. Default: <scanRoot>/dist
  --lexicon     Path to lexicon JSON. Default: ${defaultLex}
  --help, -h    Show this message.
`);
}

// ----------------- helpers -----------------
function normalizeText(s: string): string {
  // Normalize all text to NFC (composed) form
  return s.normalize("NFC");
}

// ----------------- main logic -----------------
function loadLexicon(lexPath: string): Record<string, string> {
  if (!fs.existsSync(lexPath)) {
    console.error(`Lexicon not found at: ${lexPath}`);
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(lexPath, "utf8");
    const j = JSON.parse(raw);

    if (typeof j !== "object" || Array.isArray(j))
      throw new Error("Invalid lexicon format");

    const map: Record<string, string> = {};

    function addEntries(section: any, type: string) {
      for (const [javaWord, variants] of Object.entries(section)) {
        const v = variants as any;
        const allYoruba = [
          ...(v.default || []),
          ...(v.yorlang || []),
        ].filter((x: any) => typeof x === "string");

        for (const y of allYoruba) {
          const normY = normalizeText(y);

          // Optional: detect accent drift (debugging only)
          // if (y.normalize("NFD") !== y) {
          //   console.warn(`Notice: normalized Yoruba word "${y}"`);
          // }

          map[normY] = javaWord;
        }
      }
    }

    if (j.keywords) addEntries(j.keywords, "keyword");
    if (j.identifiers) addEntries(j.identifiers, "identifier");

    console.log(`Loaded lexicon with ${Object.keys(map).length} Yoruba→Java mappings.`);
    return map;
  } catch (e) {
    console.error("Failed to load lexicon:", e);
    process.exit(1);
  }
}

function translate(content: string, map: Record<string, any>): string {
  const normalizedContent = normalizeText(content);
  let out = normalizedContent;

  for (const [y, j] of Object.entries(map)) {
    const replacement =
      typeof j === "string"
        ? j
        : typeof j === "object" && j !== null && "java" in j
          ? j.java
          : null;

    if (typeof replacement !== "string") {
      console.warn(`Skipping invalid mapping for: "${y}"`);
      continue;
    }

    const esc = y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`\\b${esc}\\b`, "g");
    out = out.replace(pattern, replacement);
  }

  return out;
}

function findYjavaFiles(dir: string): string[] {
  const res: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (["dist", "node_modules", ".git"].includes(e.name)) continue;
      res.push(...findYjavaFiles(full));
    } else if (e.isFile() && e.name.endsWith(".yjava")) {
      res.push(full);
    }
  }
  return res;
}

function transpileFile(projectRoot: string, outRoot: string, file: string, map: Record<string, string>) {
  const rel = path.relative(projectRoot, file);
  const outPath = path.join(outRoot, rel).replace(/\.yjava$/, ".java");

  const src = fs.readFileSync(file, "utf8");
  const java = translate(src, map);

  // Normalize and check unmapped tokens
  const unmapped = Array.from(src.matchAll(/\b([a-zA-ZÀ-ÿ]+)\b/g))
    .map(m => normalizeText(m[1]))
    .filter(w => map[w] === undefined);

  if (unmapped.length)
    console.warn(`⚠️  Unmapped tokens in ${path.basename(file)}: ${[...new Set(unmapped)].join(", ")}`);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, java, "utf8");
  console.log(`✓ ${rel} -> ${path.relative(projectRoot, outPath)}`);
}

function main() {
  const scriptPath = process.argv[1];
  const args = parseArgs();
  if (args.help) {
    printHelp(scriptPath);
    process.exit(0);
  }

  const scanRoot = args.scan ? path.resolve(String(args.scan)) : process.cwd();
  if (!fs.existsSync(scanRoot) || !fs.statSync(scanRoot).isDirectory()) {
    console.error(`Scan path is invalid: ${scanRoot}`);
    process.exit(1);
  }

  const outRoot = args.out ? path.resolve(String(args.out)) : path.join(scanRoot, "dist");

  const defaultLex = path.resolve(path.dirname(scriptPath), "..", "data", "lexicon-v1.0.1.json");
  const lexPath = args.lexicon ? path.resolve(String(args.lexicon)) : defaultLex;

  console.log(`Transpiler run:
  scanRoot: ${scanRoot}
  outRoot:  ${outRoot}
  lexicon:  ${lexPath}
  `);

  const map = loadLexicon(lexPath);
  const files = findYjavaFiles(scanRoot);

  if (files.length === 0) {
    console.log("No .yjava files found under the scan root.");
    return;
  }

  console.log(`Found ${files.length} .yjava file(s). Transpiling...\n`);
  for (const f of files) transpileFile(scanRoot, outRoot, f, map);
  console.log(`\nDone. Generated files are under: ${outRoot}`);
}

main();
