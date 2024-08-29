import { RootModule } from "test/learn/root.module";
import { BookModule } from "src/book/book.module";
import { UsersModule } from "test/learn/users/users.module";
import { AuthLocUserModule } from "./auth-loc/users/authlocuser.module";
import { AuthLocalModule } from "./auth-loc/auth/authlocal.module";
import { AuthLocController } from "./auth-loc/authloc.controller";
import { AuthUserModule } from "./auth-jwt/user/authuser.module";
import { AuthController } from "./auth-jwt/auth.controller";
import { AuthModule } from "./auth-jwt/auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        RootModule,
        BookModule,
        UsersModule,
        AuthLocUserModule,
        AuthLocalModule,
        AuthUserModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env.local" // Default By .ENV File Run Given Only Specific File Has You Need
        })
    ],
    controllers: [
        AuthLocController,
        AuthController
    ],
    providers: [],
    exports: []
})
export class AppModule {

    constructor() {
        console.log("App Module");
    }

};