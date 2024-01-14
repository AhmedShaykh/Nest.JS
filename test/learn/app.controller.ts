import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService) { }; // Nest.JS Provided Object

    @Post("/add")
    addBook(): string {
        return this.bookService.addBook();
    };

    @Delete("/delete")
    deleteBook(): string {
        return this.bookService.deleteBook();
    };

    @Put("/update")
    updateBook(): string {
        return this.bookService.updateBook();
    };

    @Get("/find")
    findAllBooks(): string {
        return this.bookService.findAllBooks();
    };

    @Get("get/:bookId")
    findOne(@Param() params): string {
        return this.bookService.findOne(params);
    };

};