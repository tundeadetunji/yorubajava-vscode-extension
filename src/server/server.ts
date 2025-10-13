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

  // Normalize entire text (important for Yoruba diacritics)
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
// Hover Support
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

  const hoverInfo: Record<string, string> = {
    "gbogbo": "Keyword: declares visibility or scope (public).",
    "kilasi": "Keyword: 'class' — begins a class declaration.",
    "diduro": "Keyword: defines a static or shared function.",
    "ofe": "Keyword: defines the return type 'void'.",
    "sọ": "Keyword: print statement (equivalent to System.out.println).",
    "bẹrẹ": "Keyword: 'start' — entry point function (like 'main').",
  };

  const contents = hoverInfo[word];
  return contents
    ? {
        contents: {
          kind: "markdown",
          value: `**${word}**\n\n${contents}`,
        },
      }
    : null;
});

// -------------------------------------------------------
// Completion Support
// -------------------------------------------------------
connection.onCompletion(() => [
  { label: "gbogbo", kind: 14, detail: "Begin class definition" },
  { label: "kilasi", kind: 14, detail: "Keyword: class" },
  { label: "diduro", kind: 14, detail: "Define function" },
  { label: "ofe", kind: 14, detail: "Return type: void" },
  { label: "sọ", kind: 14, detail: "Print statement" },
  { label: "bẹrẹ", kind: 14, detail: "Function entry point" },
]);

connection.onCompletionResolve((item) => ({
  ...item,
  documentation: `**${item.label}**: YorubaJava keyword.`,
}));

// -------------------------------------------------------
// Listen for document events and start the server
// -------------------------------------------------------
documents.listen(connection);
connection.listen();
