import { AuthUserEntity } from "../user/authuser.entity";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) { };

    generateToken(payload: AuthUserEntity): string {

        return this.jwtService.sign(payload);

    };

};