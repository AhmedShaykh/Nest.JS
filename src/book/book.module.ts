import { BookController } from "./book.controller";
import { BookMiddleware } from "./book.middleware";
import { BookService } from "./book.service";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

@Module({
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {

        consumer.apply(BookMiddleware).forRoutes("book");

    };

};