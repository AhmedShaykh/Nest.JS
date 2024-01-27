import { AuthLocUserService } from "./authlocuser.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [],
    providers: [AuthLocUserService],
    exports: [AuthLocUserService]
})
export class AuthLocUserModule { };