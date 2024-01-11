import { ChatModule } from "./modules/chat.module";
import { OrdersModule } from "./modules/orders.module";
import { UsersModule } from "./modules/users.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [ChatModule, UsersModule, OrdersModule],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor() {
        console.log("App Module");
    }
};