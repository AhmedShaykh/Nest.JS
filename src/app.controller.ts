import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("book")
export class BookController {

    @Post("/add")
    addBook(): string {
        return "Add A New Book"
    };

    @Delete("/delete")
    deleteBook(): string {
        return "Deleting Book"
    };

    @Put("/update")
    updateBook(): string {
        return "Update New Book"
    };

    @Get("/find")
    findAllBooks(): string {
        return "Find All Books"
    };

    @Get("get/:bookId")
    findOne(@Param() params): string {
        return `Get Dynamic ${params.bookId}`;
    };
};