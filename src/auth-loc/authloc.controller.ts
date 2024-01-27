import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("authloc")
export class AuthLocController {

    constructor() { };

    @Get("/")
    @UseGuards(AuthGuard("local")) // Nest.JS Passport Provide AuthGuard
    getUser(@Request() req): string {
        return req.user;
    };
};