import { Controller, Get, Inject, Query } from '@nestjs/common';
import { GetSprayConditionsDto } from './dto/get-spray-condition.dto';
import { SprayConditionResponseInterface } from './interfaces/spray-condition-response.interface';
import { SprayConditionsServiceInterface } from './interfaces/spray-conditions.service.interface';

@Controller('spray-conditions')
export class SprayConditionsController {
  constructor(
    @Inject('SprayConditionsServiceInterface')
    private readonly sprayConditionsService: SprayConditionsServiceInterface,
  ) {}

  @Get()
  public async get(@Query() queryParams: GetSprayConditionsDto): Promise<SprayConditionResponseInterface[]> {
    return this.sprayConditionsService.getByLatLog(queryParams.lat, queryParams.long);
  }
}
