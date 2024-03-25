import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [],
    providers: []
})
export class UsersModule2 {
    constructor() {
        console.log("Users 2 Module");
    }
};