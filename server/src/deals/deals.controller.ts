import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DealsService } from './deals.service';
import { IsAuthorized } from 'src/guards/isAuthorized.guard';

@Controller('deals')
@UseGuards(IsAuthorized)
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  findAll(): any {
    return this.dealsService.findAll();
  }
}
