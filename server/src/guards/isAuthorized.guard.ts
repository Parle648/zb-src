import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class IsAuthorized implements CanActivate {
  constructor(private readonly database: DatabaseService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userData: any = jwt.decode(request.query.token);

    const user = this.database.users.findFirst({ where: { id: userData.id } });

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
