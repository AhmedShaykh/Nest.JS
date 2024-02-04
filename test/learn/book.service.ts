import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {

    addBook(): string {
        return "Add A New Book";
    };

    deleteBook(): string {
        return "Deleting Book";
    };

    updateBook(): string {
        return "Update New Book";
    };

    findAllBooks(): string {
        return "Find All Books";
    };

    findOne(params): string {
        return `Get Dynamic ${params.bookId}`;
    };

};