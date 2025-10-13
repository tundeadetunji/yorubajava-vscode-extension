// scripts/generate-grammar.ts
import fs from "fs";
import path from "path";

interface LexiconEntry {
    default: string[];
    yorlang?: string[];
}

interface Lexicon {
    keywords: Record<string, LexiconEntry>;
    identifiers?: Record<string, LexiconEntry>;
    meta?: Record<string, any>;
}

const lexiconPath = path.resolve(__dirname, "../data/lexicon-v1.0.1.json");
const lexicon: Lexicon = JSON.parse(fs.readFileSync(lexiconPath, "utf8"));

// Build keyword definitions from Yoruba equivalents (first item in `default`)
const keywordEntries = Object.entries(lexicon.keywords)
    .filter(([_, v]) => v.default && v.default.length > 0)
    .map(([k, v]) => {
        const yorubaWord = v.default[0]; // take first Yoruba keyword
        const tokenName = k.toUpperCase();
        return `  ${tokenName} : '${yorubaWord}' ;`;
    })
    .join("\n");

// Grammar template
const grammar = `grammar YorubaJava;

// ---------------- LEXER ----------------

// Yoruba Keywords
${keywordEntries}

// Symbols
LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;
SEMI   : ';' ;
DOT    : '.' ;
COMMA  : ',' ;

// Literals
STRING : '"' (~["\\r\\n])* '"' ;
ID     : [\\p{L}_] [\\p{L}\\p{Nd}_]* ;

// Comments and Whitespace
LINE_COMMENT  : '//' ~[\\r\\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS            : [ \\t\\r\\n]+ -> skip ;

// ---------------- PARSER ----------------

compilationUnit : (classDeclaration)* EOF ;

classDeclaration : PUBLIC? CLASS ID LBRACE (methodDeclaration)* RBRACE ;

methodDeclaration : (PUBLIC | STATIC)* VOID MAIN LPAREN RPAREN block ;

block : LBRACE (statement)* RBRACE ;

statement : printStatement | expressionStatement ;

printStatement : PRINT LPAREN expression RPAREN SEMI ;

expressionStatement : expression SEMI ;

expression
    : primary
    | expression DOT ID
    | expression DOT ID LPAREN argumentList? RPAREN
    ;

primary : ID | STRING ;

argumentList : expression (COMMA expression)* ;
`;

const grammarPath = path.resolve(__dirname, "../grammar/YorubaJava.g4");
fs.writeFileSync(grammarPath, grammar, "utf8");

console.log("✅ Regenerated YorubaJava.g4 with Yoruba keywords.");
