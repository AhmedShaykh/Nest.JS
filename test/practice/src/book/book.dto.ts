export interface Book {
    id: string;
    title: string;
    author: string;
    published: string;
};

export interface BookDto {
    id: number;
    name: string;
};

import { IsInt, IsString } from "class-validator";
export class BookDto2 {
    @IsInt()
    id: number;

    @IsString()
    name: string;
};