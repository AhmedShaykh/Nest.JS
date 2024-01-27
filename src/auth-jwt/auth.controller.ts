import { Controller, UseGuards, Request, Post, Get } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {

    constructor(private readonly authService: AuthService) { };

    @Post("/login")
    @UseGuards(AuthGuard("local"))
    login(@Request() req): string {
        return this.authService.generateToken(req.user); // Authentication
    };

    @Get("/dev")
    @UseGuards(AuthGuard("jwt"))
    developer(): string {
        return "This Is Developer Data";
    };

};