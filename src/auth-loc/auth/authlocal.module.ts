import { AuthLocUserModule } from "../users/authlocuser.module";
import { PassportLocalStrategy } from "./passport.local.strategy";
import { Module } from "@nestjs/common";

@Module({
    imports: [AuthLocUserModule],
    controllers: [],
    providers: [PassportLocalStrategy]
})
export class AuthLocalModule { };