import { YorubaJavaVisitor } from "../parser/YorubaJavaVisitor";
import { ClassDeclarationContext, MethodDeclarationContext } from "../parser/YorubaJavaParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export interface CollectedInfo {
    classes: string[];
    methods: string[];
}

export class YorubaJavaTreeVisitor
    extends AbstractParseTreeVisitor<CollectedInfo>
    implements YorubaJavaVisitor<CollectedInfo> {
    private info: CollectedInfo = { classes: [], methods: [] };

    protected defaultResult(): CollectedInfo {
        return this.info;
    }

    visitClassDeclaration(ctx: ClassDeclarationContext) {
        const className = ctx.ID()?.text ?? "<unnamed>";
        this.info.classes.push(className);
        return this.visitChildren(ctx);
    }

    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        const methodName = ctx.MAIN()?.text ?? "<unnamed>";
        this.info.methods.push(methodName);
        return this.visitChildren(ctx);
    }



    getCollectedInfo(): CollectedInfo {
        return this.info;
    }
}
