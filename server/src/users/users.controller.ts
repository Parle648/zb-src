import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: Prisma.UsersCreateArgs): Promise<any> {
    return this.userService.createOne(createUserDto);
  }

  @Get()
  authorization(
    @Query() { loginData }: { loginData: {email: string, password: string} },
  ): Promise<any> {
    return this.userService.authorization(loginData);
  }
}
