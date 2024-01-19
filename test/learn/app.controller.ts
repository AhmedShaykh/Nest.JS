import {
    BadRequestException,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseFilters
} from "@nestjs/common";
import { BookExceptionFilter } from "./users/Exceptions/book.exception.filter";
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
    @UseFilters(BookExceptionFilter)
    findAllBooks(): string {
        throw new BadRequestException();
        return this.bookService.findAllBooks();
    };

    @Get("get/:bookId")
    findOne(@Param() params): string {
        return this.bookService.findOne(params);
    };

};