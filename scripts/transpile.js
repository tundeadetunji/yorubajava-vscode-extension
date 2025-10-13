"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Yoruba → Java Transpiler (Production-ready)
 * -------------------------------------------
 * Loads keyword translations dynamically from /data/lexicon-v1.0.1.json
 * Scans all .yjava files under ./src/
 * Writes .java outputs under ./dist/, preserving folder structure.
 *
 * Usage:
 *   npx ts-node scripts/transpile.ts
 *   or
 *   npm run transpile
 */
// ---- Configuration -------------------------------------------------
const SRC_ROOT = path_1.default.resolve("src");
const OUT_ROOT = path_1.default.resolve("dist");
const LEXICON_PATH = path_1.default.resolve("data/lexicon-v1.0.1.json");
// ---------------------------------------------------------------------
/**
 * Load Yoruba → Java word map from JSON file.
 * Expects structure: { "kilasi": "class", "gbogbo": "public", ... }
 */
function loadLexicon() {
    if (!fs_1.default.existsSync(LEXICON_PATH)) {
        console.error(`❌ Lexicon not found at: ${LEXICON_PATH}`);
        process.exit(1);
    }
    try {
        const data = fs_1.default.readFileSync(LEXICON_PATH, "utf8");
        const json = JSON.parse(data);
        if (typeof json !== "object" || Array.isArray(json)) {
            throw new Error("Invalid lexicon format — expected { key: value } object.");
        }
        return json;
    }
    catch (err) {
        console.error("❌ Failed to load or parse lexicon:", err);
        process.exit(1);
    }
}
/**
 * Replace Yoruba keywords with Java equivalents.
 */
function translateYorubaToJava(content, wordMap) {
    let translated = content;
    for (const [yoruba, java] of Object.entries(wordMap)) {
        const pattern = new RegExp(`\\b${yoruba}\\b`, "g");
        translated = translated.replace(pattern, java);
    }
    return translated;
}
/**
 * Process one .yjava file
 */
function transpileFile(inputFile, wordMap) {
    const relPath = path_1.default.relative(SRC_ROOT, inputFile);
    const outPath = path_1.default.join(OUT_ROOT, relPath.replace(/\.yjava$/, ".java"));
    const content = fs_1.default.readFileSync(inputFile, "utf8");
    const javaCode = translateYorubaToJava(content, wordMap);
    // ensure output folder exists
    fs_1.default.mkdirSync(path_1.default.dirname(outPath), { recursive: true });
    fs_1.default.writeFileSync(outPath, javaCode, "utf8");
    console.log(`✓ Transpiled: ${relPath} → dist/${relPath.replace(/\.yjava$/, ".java")}`);
}
/**
 * Recursively find all .yjava files
 */
function walkDir(dir) {
    const results = [];
    const items = fs_1.default.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const full = path_1.default.join(dir, item.name);
        if (item.isDirectory()) {
            results.push(...walkDir(full));
        }
        else if (item.isFile() && full.endsWith(".yjava")) {
            results.push(full);
        }
    }
    return results;
}
/**
 * Entry point
 */
function main() {
    if (!fs_1.default.existsSync(SRC_ROOT)) {
        console.error(`Source folder not found: ${SRC_ROOT}`);
        process.exit(1);
    }
    const wordMap = loadLexicon();
    const files = walkDir(SRC_ROOT);
    if (files.length === 0) {
        console.log("No .yjava files found.");
        return;
    }
    console.log(`Transpiling ${files.length} file(s)...`);
    files.forEach((f) => transpileFile(f, wordMap));
    console.log(`\n✅ Done. Java files written under: ${OUT_ROOT}`);
}
main();
//# sourceMappingURL=transpile.js.map