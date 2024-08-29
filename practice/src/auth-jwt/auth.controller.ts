import { Controller, UseGuards, Request, Post, Get } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "@nestjs/passport"
import { RoleGuard } from "./role.guard";
import { CONSTANTS } from "./role.constants";

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
    developer(@Request() req): string {
        return "This Is Developer Data" + JSON.stringify(req.user); // Authorization
    };

    @Get("/ai")
    @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.AI)) // Custom Developer Roles
    aiDeveloper(@Request() req): string {
        return req.user;
    };

    @Get("/cn")
    @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.CN))
    cloudDeveloper(@Request() req): string {
        return req.user;
    };

    @Get("/bc")
    @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.BC))
    blockDeveloper(@Request() req): string {
        return req.user;
    };

};