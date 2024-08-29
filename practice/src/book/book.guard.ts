import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate {

    public key: string = "Z@QNSPQRKBSQ%#sDA@&@";

    public username: string = "Ahmed";

    public password: string = "1234";

    canActivate(context: ExecutionContext): boolean {

        const ctx = context.switchToHttp();

        const req = ctx.getRequest<Request>();

        console.log("Guard Checking...");

        if (req.header("username") === undefined && req.header("password") === undefined) return false;

        return req.header("username") === this.username && req.header("password") === this.password;
    };

};