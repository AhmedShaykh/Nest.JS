import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [],
    providers: []
})
export class OrdersModule2 {
    constructor() {
        console.log("Orders 2 Module");
    }
};