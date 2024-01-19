import { HttpException, HttpStatus } from "@nestjs/common";

export class UserException extends HttpException { // Custom Exception Class
    constructor() {
        super("Custom User Exception Error", HttpStatus.BAD_REQUEST);
    }
};