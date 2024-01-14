import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./book.dto";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService) { };

    @Get("/books")
    getBooks(): Book[] {
        return this.bookService.getBooks();
    };

    @Get("/books/:id")
    getBookId(@Param("id") bookId: string): Book {
        return this.bookService.getBooks().find(book => book.id === bookId);
    };

    @Post("/addBook")
    addBook(@Body() book: Book): string {
        return this.bookService.addBook(book);
    };

    @Put("/updateBook")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBook(book);
    };

    @Delete("/deleteBook/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBook(bookId);
    };

};