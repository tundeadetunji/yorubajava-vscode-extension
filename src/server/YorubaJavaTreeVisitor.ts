import { YorubaJavaVisitor } from "../parser/YorubaJavaVisitor";
import { YorubaJavaParser, ClassDeclarationContext, MethodDeclarationContext } from "../parser/YorubaJavaParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

/**
 * Traverses the YorubaJava parse tree and collects simple semantic info.
 * Later, we’ll use this to provide hover and completion items.
 */
export class YorubaJavaTreeVisitor
  extends AbstractParseTreeVisitor<void>
  implements YorubaJavaVisitor<void> {

  private classes: string[] = [];
  private methods: string[] = [];

  protected defaultResult(): void {
    // default return value for non-overridden visit methods
  }

  visitClassDeclaration(ctx: ClassDeclarationContext) {
    const className = ctx.ID()?.text ?? "<unnamed>";
    this.classes.push(className);
    return this.visitChildren(ctx);
  }

  visitMethodDeclaration(ctx: MethodDeclarationContext) {
    const methodName = ctx.MAIN()?.text ?? "<unknownMethod>";
    this.methods.push(methodName);
    return this.visitChildren(ctx);
  }

  getCollectedInfo() {
    return { classes: this.classes, methods: this.methods };
  }
}
