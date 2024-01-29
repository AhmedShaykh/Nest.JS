import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from "@nestjs/common";
import { UserException } from "./Exceptions/users.exception";
import { UpdateUserDto } from "./DTO/update-user.dto";
import { CreateUserDto } from "./DTO/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

  constructor(private readonly usersService: UsersService) { };

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  };

  @Get()
  findAll() {
    throw new BadRequestException({ // Exception
      status: 404,
      error: "Custom Error Message"
    });
    // return this.usersService.findAll();
  };

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   throw new UserException(); // Custom Exception
  //   // return this.usersService.findOne(+id);
  // };

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  };

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  };

  @Get("/user/:userId/:test")
  routeParams(@Param() params: any): string { // Routes Parameters
    return `
            This Is Routes Parameters With Checking 
            User ID & Test Number: ${params.userId} & ${params.test}
          `;
  };

};