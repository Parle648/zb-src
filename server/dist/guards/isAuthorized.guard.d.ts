import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';
export declare class IsAuthorized implements CanActivate {
    private readonly database;
    constructor(database: DatabaseService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
