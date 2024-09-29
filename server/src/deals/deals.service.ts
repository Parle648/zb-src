import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DealsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<any> {
    const deals: any = await this.databaseService.deals.findMany();

    return deals;
  }

  async findOne(requestedId: string): Promise<any> {
    const deal: any = await this.databaseService.deals.findUnique({where: {id: requestedId}})

    return deal;
  }
}
