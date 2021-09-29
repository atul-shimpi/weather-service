import { Inject, Injectable } from '@nestjs/common';
import { Weather } from '@components/weather/entity/weather.entity';
import { WeatherRepositoryInterface } from '@components/weather/interface/weather.repository.interface';
import { WeatherServiceInterface } from '@components/weather/interface/weather.service.interface';

@Injectable()
export class WeatherService implements WeatherServiceInterface {
  constructor(
    @Inject('WeatherRepositoryInterface')
    private readonly weatherRepository: WeatherRepositoryInterface,
  ) {}

  public async getByLatLog(lat: string, long: string): Promise<Weather[]> {
    return this.weatherRepository.findAllByCondition({ latitude: lat, longitude: long });
  }
}
