import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DealsController],
  providers: [DealsService, DatabaseService],
})
export class DealsModule {}
