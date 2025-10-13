import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  TextDocumentSyncKind,
  Diagnostic,
  DiagnosticSeverity,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { YorubaJavaLexer } from "../parser/YorubaJavaLexer";
import { YorubaJavaParser } from "../parser/YorubaJavaParser";
import { YorubaJavaTreeVisitor } from "../visitors/YorubaJavaTreeVisitor";
import fs from "fs";
import path from "path";

// -------------------------------------------------------
// Load YorubaJava lexicon dynamically
// -------------------------------------------------------
const lexiconPath = path.resolve(__dirname, "../../data/lexicon-v1.0.1.json");
let lexicon: any = {};
try {
  const data = fs.readFileSync(lexiconPath, "utf8");
  lexicon = JSON.parse(data);
  console.log(`Loaded YorubaJava lexicon: ${lexicon.meta?.version || "unknown version"}`);
} catch (err) {
  console.error("Failed to load lexicon file:", err);
  lexicon = { keywords: {}, identifiers: {} };
}

// Extract Yoruba keyword entries (using “default” group for now)
const keywordMap: Record<string, string[]> = {};
for (const [eng, obj] of Object.entries<any>(lexicon.keywords || {})) {
  keywordMap[eng] = Array.isArray(obj.default) ? obj.default : [];
}

// -------------------------------------------------------
// Create the LSP connection and text document manager
// -------------------------------------------------------
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// -------------------------------------------------------
// Initialization: advertise all supported capabilities
// -------------------------------------------------------
connection.onInitialize((_params: InitializeParams) => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      hoverProvider: true,
      completionProvider: {
        resolveProvider: true,
        triggerCharacters: [" ", ".", "(", "ọ", "ṣ", "d"],
      },
    },
  };
});

// -------------------------------------------------------
// Combined diagnostics: Regex + ANTLR parser
// -------------------------------------------------------
documents.onDidChangeContent((change) => {
  const document = change.document;

  // Normalize text (important for Yoruba diacritics)
  const text = document.getText().normalize("NFC");
  const diagnostics: Diagnostic[] = [];

  // --- Regex-based Yoruba keyword check (demo) ---
  const commentRanges: [number, number][] = [];
  const lineComments = [...text.matchAll(/\/\/.*$/gm)];
  for (const m of lineComments) commentRanges.push([m.index!, m.index! + m[0].length]);

  const blockComments = [...text.matchAll(/\/\*[\s\S]*?\*\//g)];
  for (const m of blockComments) commentRanges.push([m.index!, m.index! + m[0].length]);

  const pattern = /\basise\b/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    const startIndex = match.index!;
    const endIndex = startIndex + match[0].length;
    const insideComment = commentRanges.some(
      ([from, to]) => startIndex >= from && endIndex <= to
    );
    if (insideComment) continue;

    diagnostics.push({
      severity: DiagnosticSeverity.Warning,
      range: {
        start: document.positionAt(startIndex),
        end: document.positionAt(endIndex),
      },
      message: `Detected Yoruba keyword '${match[0]}'. (Demo diagnostic — LSP is active.)`,
      source: "yorubajava",
    });
  }

  // --- ANTLR parser-based syntax validation ---
  try {
    const inputStream = new ANTLRInputStream(text);
    const lexer = new YorubaJavaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YorubaJavaParser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError(_recognizer, _offendingSymbol, line, charPositionInLine, msg) {
        diagnostics.push({
          severity: DiagnosticSeverity.Error,
          message: msg,
          range: {
            start: { line: line - 1, character: charPositionInLine },
            end: { line: line - 1, character: charPositionInLine + 1 },
          },
          source: "YorubaJava Parser",
        });
      },
    });

    const tree = parser.compilationUnit();
    const visitor = new YorubaJavaTreeVisitor();
    visitor.visit(tree);

    const info = visitor.getCollectedInfo();
    console.log("Parsed classes:", info.classes);
    console.log("Parsed methods:", info.methods);
  } catch (err) {
    connection.console.error(`Parser error: ${err}`);
  }

  connection.sendDiagnostics({ uri: document.uri, diagnostics });
});

// -------------------------------------------------------
// Hover Support (driven by lexicon)
// -------------------------------------------------------
connection.onHover((params) => {
  const { textDocument, position } = params;
  const document = documents.get(textDocument.uri);
  if (!document) return null;

  const text = document.getText().normalize("NFC");
  const offset = document.offsetAt(position);

  const left = text.slice(0, offset).search(/[a-zA-Zọṣ_]+$/u);
  const rightMatch = text.slice(offset).match(/^[a-zA-Zọṣ_]+/u);
  const word =
    left >= 0 && rightMatch ? text.slice(left, offset + rightMatch[0].length) : "";

  // Find English keyword whose Yoruba form matches this word
  const matchingEntry = Object.entries(keywordMap).find(([, variants]) =>
    variants.includes(word)
  );

  if (!matchingEntry) return null;

  const [engKeyword, variants] = matchingEntry;
  const hoverText = `**${word}** — Yoruba for \`${engKeyword}\``;

  return {
    contents: { kind: "markdown", value: hoverText },
  };
});

// -------------------------------------------------------
// Completion Support (driven by lexicon)
// -------------------------------------------------------
connection.onCompletion(() => {
  const items: any[] = [];
  for (const [eng, variants] of Object.entries(keywordMap)) {
    for (const yorubaWord of variants) {
      items.push({
        label: yorubaWord,
        kind: 14, // CompletionItemKind.Keyword
        detail: `Keyword: ${eng}`,
        documentation: `**${yorubaWord}** — Yoruba translation of \`${eng}\`.`,
      });
    }
  }
  return items;
});

connection.onCompletionResolve((item) => ({
  ...item,
  documentation: item.documentation || `**${item.label}**: YorubaJava keyword.`,
}));

// -------------------------------------------------------
// Listen for document events and start the server
// -------------------------------------------------------
documents.listen(connection);
connection.listen();
