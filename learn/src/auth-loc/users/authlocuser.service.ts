import { AuthLocUserEntity } from "./authlocuser.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthLocUserService {

    public users: AuthLocUserEntity[] = [
        {
            username: "user1",
            password: "admin",
            email: "user1@gmail.com"
        },
        {
            username: "user2",
            password: "admin",
            email: "user2@gmail.com"
        },
        {
            username: "user3",
            password: "admin",
            email: "user3@gmail.com"
        }
    ];

    getUserByName(userName: string): AuthLocUserEntity {
        return this.users.find((user: AuthLocUserEntity) => user.username === userName);
    };
};