import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform
} from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer"; // Both Are Same Working 
import { BookDto2 } from "./book.dto";
import { validate } from "class-validator";

@Injectable()
export class BookDataPipe implements PipeTransform { // Create Custom Pipe

    // transform(value: any, metadata: ArgumentMetadata) { // Normal Pipe Validation

    //     if (value.id >= 1 && value.id <= 10) return value;

    //     else throw new BadRequestException("Validations Failed");

    // };

    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {

        const bookClass = plainToClass(BookDto2, value); // Class Decorator Based Pipe Validation

        const errors = await validate(bookClass);

        if (errors.length > 0) {
            throw new BadRequestException("Validations Failed" + JSON.stringify(errors));
        }

        console.log(value, typeof (value));

        return value;

    };

};