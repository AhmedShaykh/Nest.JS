import { BookController } from "./app.controller";
import { BookService } from "./book.service";
import { ChatModule } from "./modules/chat.module";
import { OrdersModule } from "./modules/orders.module";
import { UsersModule } from "./modules/users.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [ChatModule, UsersModule, OrdersModule],
    controllers: [BookController],
    providers: [BookService],
    exports: []
})
export class RootModule {
    constructor() {
        console.log("Root Module");
    }
};