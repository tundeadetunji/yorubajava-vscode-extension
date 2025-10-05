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

// Literals
STRING  : '"' (~["\r\n])* '"' ;
ID
  : [\p{L}_] [\p{L}\p{Nd}_]* 
  ;


// Comments and Whitespace
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS : [ \t\r\n]+ -> skip ;

// ---------------- PARSER ----------------

compilationUnit
    : (classDeclaration)* EOF
    ;

classDeclaration
    : PUBLIC? CLASS ID LBRACE (methodDeclaration)* RBRACE
    ;

methodDeclaration
    : (PUBLIC | STATIC)* VOID MAIN LPAREN RPAREN block
    ;

block
    : LBRACE (statement)* RBRACE
    ;

statement
    : printStatement
    ;

printStatement
    : PRINT LPAREN STRING RPAREN SEMI
    ;
