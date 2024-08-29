import { AuthLocUserService } from "../users/authlocuser.service";
import { AuthLocUserEntity } from "../users/authlocuser.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: AuthLocUserService) {
        super();
    }

    validate(username: string, password: string): AuthLocUserEntity {

        const user: AuthLocUserEntity = this.userService.getUserByName(username);

        if (user === undefined) throw new UnauthorizedException();

        if (user.password === password) return user;

    };

};