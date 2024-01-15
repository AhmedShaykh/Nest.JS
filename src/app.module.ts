import { BookModule } from "test/learn/book/book.module";
import { RootModule } from "test/learn/root.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        RootModule,
        BookModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {
    constructor() {
        console.log("App Module");
    }
};