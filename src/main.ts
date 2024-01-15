import { NextFunction, Request, Response } from "express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

function globalMiddleware(req: Request, res: Response, next: NextFunction) { // Global Middleware

  console.log("Checking Global Middleware");

  next();
};

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(globalMiddleware); // Only Function Middleware Proper Working In Global Middleware

  await app.listen(8080);

};

bootstrap();