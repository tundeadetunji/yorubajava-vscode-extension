// Generated from grammar/YorubaJava.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { YorubaJavaListener } from "./YorubaJavaListener";
import { YorubaJavaVisitor } from "./YorubaJavaVisitor";


export class YorubaJavaParser extends Parser {
	public static readonly CLASS = 1;
	public static readonly PUBLIC = 2;
	public static readonly STATIC = 3;
	public static readonly VOID = 4;
	public static readonly MAIN = 5;
	public static readonly PRINT = 6;
	public static readonly LBRACE = 7;
	public static readonly RBRACE = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly SEMI = 11;
	public static readonly STRING = 12;
	public static readonly ID = 13;
	public static readonly LINE_COMMENT = 14;
	public static readonly BLOCK_COMMENT = 15;
	public static readonly WS = 16;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_classDeclaration = 1;
	public static readonly RULE_methodDeclaration = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_printStatement = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "classDeclaration", "methodDeclaration", "block", "statement", 
		"printStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'kilasi'", "'gbogbo'", "'diduro'", "'ofe'", "'b\u1EB9r\u1EB9'", 
		"'s\u1ECD'", "'{'", "'}'", "'('", "')'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "PUBLIC", "STATIC", "VOID", "MAIN", "PRINT", "LBRACE", 
		"RBRACE", "LPAREN", "RPAREN", "SEMI", "STRING", "ID", "LINE_COMMENT", 
		"BLOCK_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YorubaJavaParser._LITERAL_NAMES, YorubaJavaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YorubaJavaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "YorubaJava.g4"; }

	// @Override
	public get ruleNames(): string[] { return YorubaJavaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YorubaJavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YorubaJavaParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YorubaJavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.CLASS || _la === YorubaJavaParser.PUBLIC) {
				{
				{
				this.state = 12;
				this.classDeclaration();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 18;
			this.match(YorubaJavaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YorubaJavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorubaJavaParser.PUBLIC) {
				{
				this.state = 20;
				this.match(YorubaJavaParser.PUBLIC);
				}
			}

			this.state = 23;
			this.match(YorubaJavaParser.CLASS);
			this.state = 24;
			this.match(YorubaJavaParser.ID);
			this.state = 25;
			this.match(YorubaJavaParser.LBRACE);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YorubaJavaParser.PUBLIC) | (1 << YorubaJavaParser.STATIC) | (1 << YorubaJavaParser.VOID))) !== 0)) {
				{
				{
				this.state = 26;
				this.methodDeclaration();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(YorubaJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, YorubaJavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.PUBLIC || _la === YorubaJavaParser.STATIC) {
				{
				{
				this.state = 34;
				_la = this._input.LA(1);
				if (!(_la === YorubaJavaParser.PUBLIC || _la === YorubaJavaParser.STATIC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
			this.match(YorubaJavaParser.VOID);
			this.state = 41;
			this.match(YorubaJavaParser.MAIN);
			this.state = 42;
			this.match(YorubaJavaParser.LPAREN);
			this.state = 43;
			this.match(YorubaJavaParser.RPAREN);
			this.state = 44;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YorubaJavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(YorubaJavaParser.LBRACE);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.PRINT) {
				{
				{
				this.state = 47;
				this.statement();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this.match(YorubaJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YorubaJavaParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.printStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, YorubaJavaParser.RULE_printStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(YorubaJavaParser.PRINT);
			this.state = 58;
			this.match(YorubaJavaParser.LPAREN);
			this.state = 59;
			this.match(YorubaJavaParser.STRING);
			this.state = 60;
			this.match(YorubaJavaParser.RPAREN);
			this.state = 61;
			this.match(YorubaJavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x05\x03\x18\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1E" +
		"\n\x03\f\x03\x0E\x03!\v\x03\x03\x03\x03\x03\x03\x04\x07\x04&\n\x04\f\x04" +
		"\x0E\x04)\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x07\x053\n\x05\f\x05\x0E\x056\v\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x02\x02\x02" +
		"\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x03\x03\x02\x04\x05\x02" +
		"@\x02\x11\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02\x06\'\x03\x02\x02\x02" +
		"\b0\x03\x02\x02\x02\n9\x03\x02\x02\x02\f;\x03\x02\x02\x02\x0E\x10\x05" +
		"\x04\x03\x02\x0F\x0E\x03\x02\x02\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03" +
		"\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x14\x03\x02\x02\x02\x13\x11\x03" +
		"\x02\x02\x02\x14\x15\x07\x02\x02\x03\x15\x03\x03\x02\x02\x02\x16\x18\x07" +
		"\x04\x02\x02\x17\x16\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03" +
		"\x02\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x07\x0F\x02\x02\x1B\x1F\x07" +
		"\t\x02\x02\x1C\x1E\x05\x06\x04\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02" +
		"\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02" +
		"!\x1F\x03\x02\x02\x02\"#\x07\n\x02\x02#\x05\x03\x02\x02\x02$&\t\x02\x02" +
		"\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02" +
		"\x02\x02(*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07\x06\x02\x02+,\x07" +
		"\x07\x02\x02,-\x07\v\x02\x02-.\x07\f\x02\x02./\x05\b\x05\x02/\x07\x03" +
		"\x02\x02\x0204\x07\t\x02\x0213\x05\n\x06\x0221\x03\x02\x02\x0236\x03\x02" +
		"\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x0264\x03\x02" +
		"\x02\x0278\x07\n\x02\x028\t\x03\x02\x02\x029:\x05\f\x07\x02:\v\x03\x02" +
		"\x02\x02;<\x07\b\x02\x02<=\x07\v\x02\x02=>\x07\x0E\x02\x02>?\x07\f\x02" +
		"\x02?@\x07\r\x02\x02@\r\x03\x02\x02\x02\x07\x11\x17\x1F\'4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YorubaJavaParser.__ATN) {
			YorubaJavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YorubaJavaParser._serializedATN));
		}

		return YorubaJavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YorubaJavaParser.EOF, 0); }
	public classDeclaration(): ClassDeclarationContext[];
	public classDeclaration(i: number): ClassDeclarationContext;
	public classDeclaration(i?: number): ClassDeclarationContext | ClassDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(YorubaJavaParser.CLASS, 0); }
	public ID(): TerminalNode { return this.getToken(YorubaJavaParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(YorubaJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(YorubaJavaParser.RBRACE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(YorubaJavaParser.PUBLIC, 0); }
	public methodDeclaration(): MethodDeclarationContext[];
	public methodDeclaration(i: number): MethodDeclarationContext;
	public methodDeclaration(i?: number): MethodDeclarationContext | MethodDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclarationContext);
		} else {
			return this.getRuleContext(i, MethodDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public VOID(): TerminalNode { return this.getToken(YorubaJavaParser.VOID, 0); }
	public MAIN(): TerminalNode { return this.getToken(YorubaJavaParser.MAIN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public PUBLIC(): TerminalNode[];
	public PUBLIC(i: number): TerminalNode;
	public PUBLIC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YorubaJavaParser.PUBLIC);
		} else {
			return this.getToken(YorubaJavaParser.PUBLIC, i);
		}
	}
	public STATIC(): TerminalNode[];
	public STATIC(i: number): TerminalNode;
	public STATIC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YorubaJavaParser.STATIC);
		} else {
			return this.getToken(YorubaJavaParser.STATIC, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(YorubaJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(YorubaJavaParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_block; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public printStatement(): PrintStatementContext {
		return this.getRuleContext(0, PrintStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_statement; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(YorubaJavaParser.PRINT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.LPAREN, 0); }
	public STRING(): TerminalNode { return this.getToken(YorubaJavaParser.STRING, 0); }
	public RPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(YorubaJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_printStatement; }
	// @Override
	public enterRule(listener: YorubaJavaListener): void {
		if (listener.enterPrintStatement) {
			listener.enterPrintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: YorubaJavaListener): void {
		if (listener.exitPrintStatement) {
			listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


