import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: Prisma.UsersCreateArgs): Promise<any>;
    authorization({ loginData }: {
        loginData: {
            email: string;
            password: string;
        };
    }): Promise<any>;
}
