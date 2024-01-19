import { RootModule } from "test/learn/root.module";
import { BookModule } from "src/book/book.module";
import { UsersModule } from "test/learn/users/users.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        RootModule,
        BookModule,
        UsersModule
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