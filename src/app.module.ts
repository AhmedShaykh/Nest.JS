import { RootModule } from "test/learn/root.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [RootModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {
    constructor() {
        console.log("App Module");
    }
};