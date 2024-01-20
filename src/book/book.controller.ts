import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Post,
    Put,
    Req,
    Res,
    UseGuards,
    UseInterceptors,
    ValidationPipe
} from "@nestjs/common";
import { BookService } from "./book.service";
import { Book, BookDto, BookDto2 } from "./book.dto";
import { BookDataPipe } from "./bookData.pipe";
import { BookInterceptor } from "./book.interceptor";
import { BookGuard } from "./book.guard";
import { Request, Response } from "express";

@Controller("book")
// @UseGuards(new BookGuard) // Add Guard This API Run In Postman & It Work Class All Methods
export class BookController {

    constructor(private bookService: BookService) { };

    @Get("/books")
    @UseGuards(new BookGuard) // It Work Specific Method
    getBooks(): Book[] {
        console.log("Guard API Approval");
        return this.bookService.getBooks();
    };

    @Get("/books/:id")
    getBookId(@Param("id") bookId: string): Book {
        return this.bookService.getBooks().find(book => book.id === bookId);
    };

    @Get("/:id")
    findBookById(@Param("id", ParseBoolPipe) id: number): string { // Use Built-In Pipes
        console.log(id, typeof (id));
        return "Book By ID";
    };

    @Post("/uploadBook")
    @UseInterceptors(BookInterceptor) // Run Interceptor
    helloworld(
        // @Req() req: Request,
        // @Res() res: Response
    ): any {
        // return res.json(req.body);
        return "Running API With Interceptor";
    };

    @Post("/addBook")
    addBook(@Body() book: Book): string {
        return this.bookService.addBook(book);
    };

    @Post("/addData")
    addData(@Body(new BookDataPipe()) book: BookDto): string { // Add Custom Pipe
        console.log(book);
        return "Add Book";
    };

    @Post("/addData2")
    addData2(@Body(new ValidationPipe()) book: BookDto2): string { // This Built-In Method Work Custom Decorator Based Validation
        console.log(book);
        return "Add Book";
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