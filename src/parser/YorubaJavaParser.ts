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
	public static readonly DOT = 12;
	public static readonly COMMA = 13;
	public static readonly STRING = 14;
	public static readonly ID = 15;
	public static readonly LINE_COMMENT = 16;
	public static readonly BLOCK_COMMENT = 17;
	public static readonly WS = 18;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_classDeclaration = 1;
	public static readonly RULE_methodDeclaration = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_printStatement = 5;
	public static readonly RULE_expressionStatement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_primary = 8;
	public static readonly RULE_argumentList = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "classDeclaration", "methodDeclaration", "block", "statement", 
		"printStatement", "expressionStatement", "expression", "primary", "argumentList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'kilasi'", "'gbogbo'", "'diduro'", "'ofe'", "'b\u1EB9r\u1EB9'", 
		"'s\u1ECD'", "'{'", "'}'", "'('", "')'", "';'", "'.'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "PUBLIC", "STATIC", "VOID", "MAIN", "PRINT", "LBRACE", 
		"RBRACE", "LPAREN", "RPAREN", "SEMI", "DOT", "COMMA", "STRING", "ID", 
		"LINE_COMMENT", "BLOCK_COMMENT", "WS",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.CLASS || _la === YorubaJavaParser.PUBLIC) {
				{
				{
				this.state = 20;
				this.classDeclaration();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorubaJavaParser.PUBLIC) {
				{
				this.state = 28;
				this.match(YorubaJavaParser.PUBLIC);
				}
			}

			this.state = 31;
			this.match(YorubaJavaParser.CLASS);
			this.state = 32;
			this.match(YorubaJavaParser.ID);
			this.state = 33;
			this.match(YorubaJavaParser.LBRACE);
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YorubaJavaParser.PUBLIC) | (1 << YorubaJavaParser.STATIC) | (1 << YorubaJavaParser.VOID))) !== 0)) {
				{
				{
				this.state = 34;
				this.methodDeclaration();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.PUBLIC || _la === YorubaJavaParser.STATIC) {
				{
				{
				this.state = 42;
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
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(YorubaJavaParser.VOID);
			this.state = 49;
			this.match(YorubaJavaParser.MAIN);
			this.state = 50;
			this.match(YorubaJavaParser.LPAREN);
			this.state = 51;
			this.match(YorubaJavaParser.RPAREN);
			this.state = 52;
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
			this.state = 54;
			this.match(YorubaJavaParser.LBRACE);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YorubaJavaParser.PRINT) | (1 << YorubaJavaParser.STRING) | (1 << YorubaJavaParser.ID))) !== 0)) {
				{
				{
				this.state = 55;
				this.statement();
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 61;
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
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YorubaJavaParser.PRINT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.printStatement();
				}
				break;
			case YorubaJavaParser.STRING:
			case YorubaJavaParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
				this.expressionStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
			this.state = 67;
			this.match(YorubaJavaParser.PRINT);
			this.state = 68;
			this.match(YorubaJavaParser.LPAREN);
			this.state = 69;
			this.expression(0);
			this.state = 70;
			this.match(YorubaJavaParser.RPAREN);
			this.state = 71;
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
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, YorubaJavaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.expression(0);
			this.state = 74;
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, YorubaJavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 77;
			this.primary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 92;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 90;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new FieldAccessContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YorubaJavaParser.RULE_expression);
						this.state = 79;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 80;
						this.match(YorubaJavaParser.DOT);
						this.state = 81;
						this.match(YorubaJavaParser.ID);
						}
						break;

					case 2:
						{
						_localctx = new MethodCallContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YorubaJavaParser.RULE_expression);
						this.state = 82;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 83;
						this.match(YorubaJavaParser.DOT);
						this.state = 84;
						this.match(YorubaJavaParser.ID);
						this.state = 85;
						this.match(YorubaJavaParser.LPAREN);
						this.state = 87;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === YorubaJavaParser.STRING || _la === YorubaJavaParser.ID) {
							{
							this.state = 86;
							this.argumentList();
							}
						}

						this.state = 89;
						this.match(YorubaJavaParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, YorubaJavaParser.RULE_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if (!(_la === YorubaJavaParser.STRING || _la === YorubaJavaParser.ID)) {
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, YorubaJavaParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.expression(0);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorubaJavaParser.COMMA) {
				{
				{
				this.state = 98;
				this.match(YorubaJavaParser.COMMA);
				this.state = 99;
				this.expression(0);
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14l\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02" +
		"\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x05\x03 \n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x07\x04.\n\x04\f\x04\x0E\x041\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05;\n\x05\f\x05\x0E\x05" +
		">\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06D\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tZ\n\t\x03\t\x07\t]\n" +
		"\t\f\t\x0E\t`\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\vg\n\v\f\v\x0E\vj" +
		"\v\v\x03\v\x02\x02\x03\x10\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x04\x03\x02\x04\x05\x03\x02\x10\x11" +
		"\x02k\x02\x19\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02\x06/\x03\x02\x02" +
		"\x02\b8\x03\x02\x02\x02\nC\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EK\x03" +
		"\x02\x02\x02\x10N\x03\x02\x02\x02\x12a\x03\x02\x02\x02\x14c\x03\x02\x02" +
		"\x02\x16\x18\x05\x04\x03\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02" +
		"\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03\x02\x02" +
		"\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03\x02\x02" +
		"\x02\x1E \x07\x04\x02\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02" +
		" !\x03\x02\x02\x02!\"\x07\x03\x02\x02\"#\x07\x11\x02\x02#\'\x07\t\x02" +
		"\x02$&\x05\x06\x04\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02" +
		"\x02\x02\'(\x03\x02\x02\x02(*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07" +
		"\n\x02\x02+\x05\x03\x02\x02\x02,.\t\x02\x02\x02-,\x03\x02\x02\x02.1\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03" +
		"\x02\x02\x0223\x07\x06\x02\x0234\x07\x07\x02\x0245\x07\v\x02\x0256\x07" +
		"\f\x02\x0267\x05\b\x05\x027\x07\x03\x02\x02\x028<\x07\t\x02\x029;\x05" +
		"\n\x06\x02:9\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03" +
		"\x02\x02\x02=?\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07\n\x02\x02@\t\x03" +
		"\x02\x02\x02AD\x05\f\x07\x02BD\x05\x0E\b\x02CA\x03\x02\x02\x02CB\x03\x02" +
		"\x02\x02D\v\x03\x02\x02\x02EF\x07\b\x02\x02FG\x07\v\x02\x02GH\x05\x10" +
		"\t\x02HI\x07\f\x02\x02IJ\x07\r\x02\x02J\r\x03\x02\x02\x02KL\x05\x10\t" +
		"\x02LM\x07\r\x02\x02M\x0F\x03\x02\x02\x02NO\b\t\x01\x02OP\x05\x12\n\x02" +
		"P^\x03\x02\x02\x02QR\f\x04\x02\x02RS\x07\x0E\x02\x02S]\x07\x11\x02\x02" +
		"TU\f\x03\x02\x02UV\x07\x0E\x02\x02VW\x07\x11\x02\x02WY\x07\v\x02\x02X" +
		"Z\x05\x14\v\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[]\x07\f\x02\x02\\Q\x03\x02\x02\x02\\T\x03\x02\x02\x02]`\x03\x02\x02\x02" +
		"^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\x11\x03\x02\x02\x02`^\x03\x02\x02" +
		"\x02ab\t\x03\x02\x02b\x13\x03\x02\x02\x02ch\x05\x10\t\x02de\x07\x0F\x02" +
		"\x02eg\x05\x10\t\x02fd\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02" +
		"\x02hi\x03\x02\x02\x02i\x15\x03\x02\x02\x02jh\x03\x02\x02\x02\f\x19\x1F" +
		"\'/<CY\\^h";
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
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public printStatement(): PrintStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_statement; }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(YorubaJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_printStatement; }
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(YorubaJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FieldAccessContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(YorubaJavaParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(YorubaJavaParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodCallContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(YorubaJavaParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(YorubaJavaParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(YorubaJavaParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(YorubaJavaParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(YorubaJavaParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_primary; }
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YorubaJavaParser.COMMA);
		} else {
			return this.getToken(YorubaJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorubaJavaParser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: YorubaJavaVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


