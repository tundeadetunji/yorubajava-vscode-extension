// Generated from c:/Users/Pediforte/Desktop/Hub/Home/iNhouse/Projects/YorubaLanguagePlugins/yorubajava/grammar/YorubaJava.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class YorubaJavaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CLASS=1, PUBLIC=2, STATIC=3, VOID=4, MAIN=5, PRINT=6, LBRACE=7, RBRACE=8, 
		LPAREN=9, RPAREN=10, SEMI=11, STRING=12, ID=13, LINE_COMMENT=14, BLOCK_COMMENT=15, 
		WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CLASS", "PUBLIC", "STATIC", "VOID", "MAIN", "PRINT", "LBRACE", "RBRACE", 
			"LPAREN", "RPAREN", "SEMI", "STRING", "ID", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'kilasi'", "'gbogbo'", "'diduro'", "'ofe'", "'b\\u00E1\\u00BA\\u00B9r\\u00E1\\u00BA\\u00B9'", 
			"'s\\u00E1\\u00BB\\uFFFD'", "'{'", "'}'", "'('", "')'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CLASS", "PUBLIC", "STATIC", "VOID", "MAIN", "PRINT", "LBRACE", 
			"RBRACE", "LPAREN", "RPAREN", "SEMI", "STRING", "ID", "LINE_COMMENT", 
			"BLOCK_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public YorubaJavaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "YorubaJava.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010\u0082\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0005\u000bU\b\u000b\n\u000b\f\u000b"+
		"X\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0005\f^\b\f\n\f\f\f"+
		"a\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0005\rg\b\r\n\r\f\rj\t\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e"+
		"r\b\u000e\n\u000e\f\u000eu\t\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000f}\b\u000f\u000b\u000f"+
		"\f\u000f~\u0001\u000f\u0001\u000f\u0001s\u0000\u0010\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"\u0001\u0000\u0005\u0003\u0000\n\n\r\r\"\"\u0003\u0000AZ__az\u0004\u0000"+
		"09AZ__az\u0002\u0000\n\n\r\r\u0003\u0000\t\n\r\r  \u0086\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0001!\u0001\u0000\u0000\u0000"+
		"\u0003(\u0001\u0000\u0000\u0000\u0005/\u0001\u0000\u0000\u0000\u00076"+
		"\u0001\u0000\u0000\u0000\t:\u0001\u0000\u0000\u0000\u000bC\u0001\u0000"+
		"\u0000\u0000\rH\u0001\u0000\u0000\u0000\u000fJ\u0001\u0000\u0000\u0000"+
		"\u0011L\u0001\u0000\u0000\u0000\u0013N\u0001\u0000\u0000\u0000\u0015P"+
		"\u0001\u0000\u0000\u0000\u0017R\u0001\u0000\u0000\u0000\u0019[\u0001\u0000"+
		"\u0000\u0000\u001bb\u0001\u0000\u0000\u0000\u001dm\u0001\u0000\u0000\u0000"+
		"\u001f|\u0001\u0000\u0000\u0000!\"\u0005k\u0000\u0000\"#\u0005i\u0000"+
		"\u0000#$\u0005l\u0000\u0000$%\u0005a\u0000\u0000%&\u0005s\u0000\u0000"+
		"&\'\u0005i\u0000\u0000\'\u0002\u0001\u0000\u0000\u0000()\u0005g\u0000"+
		"\u0000)*\u0005b\u0000\u0000*+\u0005o\u0000\u0000+,\u0005g\u0000\u0000"+
		",-\u0005b\u0000\u0000-.\u0005o\u0000\u0000.\u0004\u0001\u0000\u0000\u0000"+
		"/0\u0005d\u0000\u000001\u0005i\u0000\u000012\u0005d\u0000\u000023\u0005"+
		"u\u0000\u000034\u0005r\u0000\u000045\u0005o\u0000\u00005\u0006\u0001\u0000"+
		"\u0000\u000067\u0005o\u0000\u000078\u0005f\u0000\u000089\u0005e\u0000"+
		"\u00009\b\u0001\u0000\u0000\u0000:;\u0005b\u0000\u0000;<\u0005\u00e1\u0000"+
		"\u0000<=\u0005\u00ba\u0000\u0000=>\u0005\u00b9\u0000\u0000>?\u0005r\u0000"+
		"\u0000?@\u0005\u00e1\u0000\u0000@A\u0005\u00ba\u0000\u0000AB\u0005\u00b9"+
		"\u0000\u0000B\n\u0001\u0000\u0000\u0000CD\u0005s\u0000\u0000DE\u0005\u00e1"+
		"\u0000\u0000EF\u0005\u00bb\u0000\u0000FG\u0005\u8000\ufffd\u0000\u0000"+
		"G\f\u0001\u0000\u0000\u0000HI\u0005{\u0000\u0000I\u000e\u0001\u0000\u0000"+
		"\u0000JK\u0005}\u0000\u0000K\u0010\u0001\u0000\u0000\u0000LM\u0005(\u0000"+
		"\u0000M\u0012\u0001\u0000\u0000\u0000NO\u0005)\u0000\u0000O\u0014\u0001"+
		"\u0000\u0000\u0000PQ\u0005;\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000"+
		"RV\u0005\"\u0000\u0000SU\b\u0000\u0000\u0000TS\u0001\u0000\u0000\u0000"+
		"UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000"+
		"\u0000WY\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000YZ\u0005\"\u0000"+
		"\u0000Z\u0018\u0001\u0000\u0000\u0000[_\u0007\u0001\u0000\u0000\\^\u0007"+
		"\u0002\u0000\u0000]\\\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000\u0000"+
		"_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`\u001a\u0001\u0000"+
		"\u0000\u0000a_\u0001\u0000\u0000\u0000bc\u0005/\u0000\u0000cd\u0005/\u0000"+
		"\u0000dh\u0001\u0000\u0000\u0000eg\b\u0003\u0000\u0000fe\u0001\u0000\u0000"+
		"\u0000gj\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000hi\u0001\u0000"+
		"\u0000\u0000ik\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000kl\u0006"+
		"\r\u0000\u0000l\u001c\u0001\u0000\u0000\u0000mn\u0005/\u0000\u0000no\u0005"+
		"*\u0000\u0000os\u0001\u0000\u0000\u0000pr\t\u0000\u0000\u0000qp\u0001"+
		"\u0000\u0000\u0000ru\u0001\u0000\u0000\u0000st\u0001\u0000\u0000\u0000"+
		"sq\u0001\u0000\u0000\u0000tv\u0001\u0000\u0000\u0000us\u0001\u0000\u0000"+
		"\u0000vw\u0005*\u0000\u0000wx\u0005/\u0000\u0000xy\u0001\u0000\u0000\u0000"+
		"yz\u0006\u000e\u0000\u0000z\u001e\u0001\u0000\u0000\u0000{}\u0007\u0004"+
		"\u0000\u0000|{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~|\u0001"+
		"\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000"+
		"\u0000\u0000\u0080\u0081\u0006\u000f\u0000\u0000\u0081 \u0001\u0000\u0000"+
		"\u0000\u0006\u0000V_hs~\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}