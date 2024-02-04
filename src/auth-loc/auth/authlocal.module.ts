import { AuthLocUserModule } from "../users/authlocuser.module";
import { PassportLocalStrategy } from "./passport.local.strategy";
import { PassportModule } from "@nestjs/passport";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        PassportModule,
        AuthLocUserModule
    ],
    controllers: [],
    providers: [PassportLocalStrategy]
})
export class AuthLocalModule { };