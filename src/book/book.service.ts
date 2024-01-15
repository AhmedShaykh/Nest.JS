import { Injectable } from "@nestjs/common";
import { Book } from "./book.dto";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class BookService {

    public books: Book[] = [];

    addBook(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "Add New Book";
    };

    updateBook(book: Book): string {
        let index = this.books.findIndex((currentBook) => currentBook.id == book.id);
        this.books[index] = book;
        return "Update Book";
    };

    deleteBook(bookId: string): string {
        this.books = this.books.filter((book) => book.id != bookId);
        return "Delete Book";
    };

    getBooks(): Book[] {
        return this.books;
    };

    getBookId(bookId: string): Book {
        return uuidv4();;
    };
};