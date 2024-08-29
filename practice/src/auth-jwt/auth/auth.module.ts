import { AuthUserModule } from "../user/authuser.module";
import { LocalStrategy } from "./local.strategy";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JWTStrategy } from "./jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        PassportModule,
        AuthUserModule,
        JwtModule.register({
            secret: "SECRET",
            signOptions: {
                expiresIn: "30m"
            }
        })
    ],
    controllers: [],
    providers: [
        LocalStrategy,
        AuthService,
        JWTStrategy
    ],
    exports: [AuthService] // Important
})
export class AuthModule { };