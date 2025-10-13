grammar YorubaJava;

// ---------------- LEXER ----------------

// Keywords
CLASS   : 'kilasi' ;
PUBLIC  : 'gbogbo' ;
STATIC  : 'diduro' ;
VOID    : 'ofe' ;
MAIN    : 'bẹrẹ' ;
PRINT   : 'sọ' ;

// Symbols
LBRACE  : '{' ;
RBRACE  : '}' ;
LPAREN  : '(' ;
RPAREN  : ')' ;
SEMI    : ';' ;
DOT     : '.' ;
COMMA   : ',' ;

// Literals
STRING  : '"' (~["\r\n])* '"' ;
ID      : [\p{L}_] [\p{L}\p{Nd}_]* ;

// Comments and Whitespace
LINE_COMMENT  : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS            : [ \t\r\n]+ -> skip ;

// ---------------- PARSER ----------------

compilationUnit
    : (classDeclaration)* EOF
    ;

// --- Classes and Methods ---
classDeclaration
    : PUBLIC? CLASS ID LBRACE (methodDeclaration)* RBRACE
    ;

methodDeclaration
    : (PUBLIC | STATIC)* VOID MAIN LPAREN RPAREN block
    ;

// --- Blocks and Statements ---
block
    : LBRACE (statement)* RBRACE
    ;

statement
    : printStatement
    | expressionStatement
    ;

printStatement
    : PRINT LPAREN expression RPAREN SEMI
    ;

// --- NEW: Java-like Expressions ---
expressionStatement
    : expression SEMI
    ;

expression
    : primary                                 # primaryExpression
    | expression DOT ID                       # fieldAccess
    | expression DOT ID LPAREN argumentList? RPAREN  # methodCall
    ;

primary
    : ID
    | STRING
    ;

argumentList
    : expression (COMMA expression)*
    ;
