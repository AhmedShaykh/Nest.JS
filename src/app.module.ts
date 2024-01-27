import { RootModule } from "test/learn/root.module";
import { BookModule } from "src/book/book.module";
import { UsersModule } from "test/learn/users/users.module";
import { AuthLocUserModule } from "./auth-loc/users/authlocuser.module";
import { AuthLocController } from "./auth-loc/authloc.controller";
import { AuthLocalModule } from "./auth-loc/auth/authlocal.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        // RootModule,
        // BookModule,
        // UsersModule,
        AuthLocUserModule,
        AuthLocalModule
    ],
    controllers: [AuthLocController],
    providers: [],
    exports: []
})
export class AppModule {
    constructor() {
        console.log("App Module");
    }
};