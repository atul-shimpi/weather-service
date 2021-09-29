import { Controller, Get, Inject, Query } from '@nestjs/common';
import { Weather } from '@components/weather/entity/weather.entity';
import { WeatherServiceInterface } from '@components/weather/interface/weather.service.interface';
import { GetWeatherQueryParams } from './helper/query-params';

@Controller('weather')
export class WeatherController {
  constructor(
    @Inject('WeatherServiceInterface')
    private readonly weatherService: WeatherServiceInterface,
  ) {}

  @Get()
  public async get(@Query() queryParams: GetWeatherQueryParams): Promise<Weather[]> {
    return this.weatherService.getByLatLog(queryParams.lat, queryParams.long);
  }
}
