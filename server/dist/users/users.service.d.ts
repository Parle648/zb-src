import { DatabaseService } from 'src/database/database.service';
export declare class UsersService {
    private readonly database;
    constructor(database: DatabaseService);
    createOne(userDto: any): Promise<string | any>;
    authorization(loginData: {
        email: string;
        password: string;
    }): Promise<any>;
}
