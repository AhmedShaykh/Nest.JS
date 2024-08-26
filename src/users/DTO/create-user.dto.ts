import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["USER", "ADMIN"], {
        message: "Valid Role Required!"
    })
    role: "USER" | "ADMIN";
};