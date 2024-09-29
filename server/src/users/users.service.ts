import { Get, Injectable, Post, Put } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(private readonly database: DatabaseService) {}

  @Post()
  async createOne(userDto: any): Promise<string | any> {
    try {
      const user = await this.database.users.create({ data: { ...userDto } });
      const token = jwt.sign({ ...user }, process.env.JWT_SECRET);

      return { token: token };
    } catch (error) {
      return;
    }
  }

  @Put()
  async updateOne(updateUserDto: any, email: string) {
    try {
      const user = await this.database.users.update({
        where: { email: email },
        data: { ...updateUserDto },
      });
      const token = jwt.sign({ ...user }, process.env.JWT_SECRET);

      return { token: token };
    } catch (error) {
      return {
        message: 'there is no user with this email',
      };
    }
  }

  @Get()
  async authorization(loginData: string) {
    try {
      console.log({ ...JSON.parse(loginData) });

      const user = await this.database.users.findUnique({
        where: { ...JSON.parse(loginData) },
      });

      console.log(user);

      if (user === null) throw new Error();

      const authToken = jwt.sign({ ...user }, process.env.JWT_SECRET);

      return { token: authToken };
    } catch (error) {
      return { message: 'password / email is incorrect' };
    }
  }
}
