import { Get, Injectable, Post } from '@nestjs/common';
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
      return error;
    }
  }

  @Get()
  async authorization(loginData: {email: string, password: string}) {
    try {
      // const loginData: any = jwt.decode(loginDataToken);

      const user = await this.database.users.findFirst({
        where: {
          email: loginData.email,
          password: loginData.password,
        },
      });

      const authToken = jwt.sign({ ...user }, process.env.JWT_SECRET);

      return { token: authToken };
    } catch (error) {
      return error;
    }
  }
}
