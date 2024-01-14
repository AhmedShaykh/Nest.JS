import { UsersModule2 } from "./users2.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [UsersModule2],
    controllers: [],
    providers: [],
})
export class UsersModule {
    constructor() {
        console.log("Users Module");
    }
};