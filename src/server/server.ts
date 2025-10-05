import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  TextDocumentSyncKind,
  Diagnostic,
  DiagnosticSeverity
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { YorubaJavaLexer } from './parser/YorubaJavaLexer';
import { YorubaJavaParser } from './parser/YorubaJavaParser';

// -------------------------------------------------------
// Create the LSP connection and text document manager
// -------------------------------------------------------
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Basic initialization response
connection.onInitialize((_params: InitializeParams) => ({
  capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental }
}));

// -------------------------------------------------------
// Combined diagnostics: Regex demo + ANTLR parser
// -------------------------------------------------------
documents.onDidChangeContent(change => {
  const document = change.document;
  const text = document.getText();

  const diagnostics: Diagnostic[] = [];

  // --- Regex-based Yoruba keyword check (existing feature)
  const commentRanges: [number, number][] = [];

  // Match // comments
  const lineComments = [...text.matchAll(/\/\/.*$/gm)];
  for (const m of lineComments) {
    commentRanges.push([m.index!, m.index! + m[0].length]);
  }

  // Match /* ... */ comments
  const blockComments = [...text.matchAll(/\/\*[\s\S]*?\*\//g)];
  for (const m of blockComments) {
    commentRanges.push([m.index!, m.index! + m[0].length]);
  }

  // Detect Yoruba keyword 'asise' (example)
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
        end: document.positionAt(endIndex)
      },
      message: `Detected Yoruba keyword '${match[0]}'. (Demo diagnostic — LSP is active.)`,
      source: "yorubajava"
    });
  }

  // --- ANTLR parser-based syntax validation
  try {
    const inputStream = new ANTLRInputStream(text);
    const lexer = new YorubaJavaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YorubaJavaParser(tokenStream);

    parser.removeErrorListeners();

    parser.addErrorListener({
      syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg) {
        diagnostics.push({
          severity: DiagnosticSeverity.Error,
          message: msg,
          range: {
            start: { line: line - 1, character: charPositionInLine },
            end: { line: line - 1, character: charPositionInLine + 1 }
          },
          source: 'yorubajava-parser'
        });
      }
    });

    // Parse the file (root rule)
    parser.compilationUnit();

  } catch (err) {
    connection.console.error(`Parser error: ${err}`);
  }

  // Send both regex + ANTLR diagnostics to the client
  connection.sendDiagnostics({ uri: document.uri, diagnostics });
});

// -------------------------------------------------------
// Listen for document events and start the server
// -------------------------------------------------------
documents.listen(connection);
connection.listen();
