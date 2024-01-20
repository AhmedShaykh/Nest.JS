import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request } from "express";

@Injectable()
export class BookInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {

        const ctx = context.switchToHttp();

        const req = ctx.getRequest<Request>();

        req.body.name = "Ahmed";

        console.log("This Is Interceptor");

        // return next.handle();

        return next.handle().pipe(map((data) => {
            data = "From Interceptor";
            return data;
        }));
    };

};