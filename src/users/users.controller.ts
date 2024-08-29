import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdateUserDTO } from "./DTO/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

    constructor(private readonly usersService: UsersService) { };

    @Get()
    findAll(@Query("role") role?: "USER" | "ADMIN") {
        return this.usersService.findAll(role);
    };

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    };

    @Post()
    create(@Body(ValidationPipe) createUserDTO: CreateUserDTO) {
        return this.usersService.create(createUserDTO);
    };

    @Put(":id")
    update(@Param("id", ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDTO: UpdateUserDTO) {
        return this.usersService.update(id, updateUserDTO);
    };

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    };

};