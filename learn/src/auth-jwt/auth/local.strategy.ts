import { AuthUserService } from "../user/authuser.service";
import { AuthUserEntity } from "../user/authuser.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: AuthUserService) {
        super();
    }

    validate(username: string, password: string): AuthUserEntity {

        const user: AuthUserEntity = this.userService.getUserByName(username);

        if (user === undefined) throw new UnauthorizedException();

        if (user !== undefined && user.password === password) return user;

        else throw new UnauthorizedException();

    };

};