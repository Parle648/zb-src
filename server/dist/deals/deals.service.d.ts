import { DatabaseService } from 'src/database/database.service';
export declare class DealsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<any>;
}
