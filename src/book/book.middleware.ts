import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware { // Module Middleware

    use(req: Request, res: Response, next: NextFunction) {

        console.log("Checking Class Based Module Book Middleware");

        let protocol = req.protocol;

        let host = req.get("host");

        let url = req.originalUrl;

        let method = req.method;

        let date = new Date().toDateString();

        console.log(`${protocol}://${host}${url} ${method} ${date}`);

        next();
    };

};