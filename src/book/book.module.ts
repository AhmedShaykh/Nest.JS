import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule { };