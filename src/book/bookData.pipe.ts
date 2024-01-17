import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class BookDataPipe implements PipeTransform { // Create Custom Pipe

    transform(value: any, metadata: ArgumentMetadata) {

        if (value.id >= 1 && value.id <= 10) return value;

        else throw new BadRequestException("Validations Failed");

    };

};