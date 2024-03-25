import { AuthUserEntity } from "./authuser.entity";
import { CONSTANTS } from "../role.constants";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthUserService {

    public users: AuthUserEntity[] = [
        {
            username: "user1",
            password: "admin",
            email: "user1@gmail.com",
            age: 23,
            role: CONSTANTS.ROLES.AI
        },
        {
            username: "user2",
            password: "admin",
            email: "user2@gmail.com",
            age: 24,
            role: CONSTANTS.ROLES.BC
        },
        {
            username: "user3",
            password: "admin",
            email: "user3@gmail.com",
            age: 22,
            role: CONSTANTS.ROLES.CN
        }
    ];

    getUserByName(userName: string): AuthUserEntity {
        return this.users.find((user: AuthUserEntity) => user.username === userName);
    };

};