import { OrdersModule2 } from "./orders2.module";
import { OrdersModule3 } from "./orders3.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [OrdersModule2, OrdersModule3],
    controllers: [],
    providers: [],
})
export class OrdersModule {
    constructor() {
        console.log("Orders Module");
    }
};