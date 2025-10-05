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

// Create the LSP connection and text document manager
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Basic initialization response
connection.onInitialize((_params: InitializeParams) => ({
  capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental }
}));

// Example diagnostic: prove LSP works and ignore comments
documents.onDidChangeContent(change => {
  const document = change.document;
  const text = document.getText();

  // Compute comment ranges so we can skip them later
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

  // Search entire text for Yoruba keyword
  const diagnostics: Diagnostic[] = [];
  const pattern = /\basise\b/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    const startIndex = match.index!;
    const endIndex = match.index! + match[0].length;

    // Skip if inside a comment
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

  connection.sendDiagnostics({ uri: document.uri, diagnostics });
});


// Listen for document events and start the server
documents.listen(connection);
connection.listen();




// import {
//   createConnection,
//   TextDocuments,
//   ProposedFeatures,
//   InitializeParams,
//   TextDocumentSyncKind,
//   Diagnostic,
//   DiagnosticSeverity
// } from "vscode-languageserver/node";
// import { TextDocument } from "vscode-languageserver-textdocument";

// const connection = createConnection(ProposedFeatures.all);
// const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// connection.onInitialize((_params: InitializeParams) => ({
//   capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental }
// }));

// // Simple example diagnostic to prove LSP works
// documents.onDidChangeContent(change => {
//   const text = change.document.getText();
//   const diags: Diagnostic[] = [];
//   if (text.includes("asise")) {
//     diags.push({
//       severity: DiagnosticSeverity.Warning,
//       range: { start: { line: 0, character: 0 }, end: { line: 0, character: 5 } },
//       message: "Found the word 'asise' — pretend warning.",
//       source: "yorubajava"
//     });
//   }
//   connection.sendDiagnostics({ uri: change.document.uri, diagnostics: diags });
// });

// documents.listen(connection);
// connection.listen();
