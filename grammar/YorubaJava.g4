grammar YorubaJava;

// ---------------- LEXER ----------------

// Yoruba Keywords
  ABSTRACT : 'afomo' ;
  ASSERT : 'fiidi' ;
  BOOLEAN : 'itẹsi' ;
  BREAK : 'fopin' ;
  BYTE : 'kekepo' ;
  CASE : 'oro' ;
  CATCH : 'muba' ;
  CHAR : 'ami' ;
  CLASS : 'eka' ;
  CONST : 'titunmọ́' ;
  CONTINUE : 'tẹsiwaju' ;
  DEFAULT : 'aifọwọyi' ;
  DO : 'ṣe' ;
  DOUBLE : 'meji' ;
  ELSE : 'bibẹẹkọ' ;
  ENUM : 'akojọ' ;
  EXTENDS : 'faagun' ;
  FINAL : 'ipari' ;
  FINALLY : 'nipari' ;
  FLOAT : 'lefo' ;
  FOR : 'fun' ;
  GOTO : 'lọsi' ;
  IF : 'bi' ;
  IMPLEMENTS : 'lojuwe' ;
  IMPORT : 'wọle' ;
  INSTANCEOF : 'apẹẹrẹti' ;
  INT : 'nọmba' ;
  INTERFACE : 'ibasọrọ' ;
  LONG : 'gigun' ;
  MAIN : 'pataki' ;
  NATIVE : 'abínibí' ;
  NEW : 'tuntun' ;
  NULL : 'ofo' ;
  PACKAGE : 'apoti' ;
  PRINTLN : 'kolaini' ;
  PRINT : 'ko' ;
  PRIVATE : 'aládani' ;
  PROTECTED : 'abojuto' ;
  PUBLIC : 'gbogbo' ;
  RETURN : 'padà' ;
  SHORT : 'kukuru' ;
  STATIC : 'diduro' ;
  STRICTFP : 'pataleti' ;
  SUPER : 'agba' ;
  SWITCH : 'yipada' ;
  SYNCHRONIZED : 'afọpọ̀' ;
  THIS : 'eyi' ;
  THROW : 'ju' ;
  THROWS : 'nju' ;
  TRANSIENT : 'aikokoko' ;
  TRY : 'gbiyanju' ;
  VOID : 'ofe' ;
  VOLATILE : 'yiyipada' ;
  WHILE : 'nígbàtí' ;
  RECORD : 'ako' ;
  VAR : 'oniyipada' ;
  YIELD : 'fi' ;

// Symbols
LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;
SEMI   : ';' ;
DOT    : '.' ;
COMMA  : ',' ;

// Literals
STRING : '"' (~["\r\n])* '"' ;
ID     : [\p{L}_] [\p{L}\p{Nd}_]* ;

// Comments and Whitespace
LINE_COMMENT  : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS            : [ \t\r\n]+ -> skip ;

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
