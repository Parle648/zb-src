import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: Prisma.UsersCreateArgs): Promise<any> {
    return this.userService.createOne(createUserDto);
  }

  @Put()
  updateUser(
    @Body() updateUserDto: any,
    @Query() { email }: { email: string },
  ): Promise<any> {
    return this.userService.updateOne(updateUserDto, email);
  }

  @Get()
  authorization(@Query() { loginData }: { loginData: string }): Promise<any> {
    return this.userService.authorization(loginData);
  }
}
