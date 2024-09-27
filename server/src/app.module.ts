import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DealsModule } from './deals/deals.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CorsMiddleware } from './middlewares/cors.middlewares';

@Module({
  imports: [DealsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes('*');
  }
}
