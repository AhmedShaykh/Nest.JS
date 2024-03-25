import { AuthUserService } from "./authuser.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [],
    providers: [AuthUserService],
    exports: [AuthUserService]
})
export class AuthUserModule { };