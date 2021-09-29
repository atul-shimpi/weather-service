import { BaseAbstractRepository } from '@repositories/base/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Weather } from '@components/weather/entity/weather.entity';
import { WeatherRepositoryInterface } from '@components/weather/interface/weather.repository.interface';

@Injectable()
export class WeatherRepository extends BaseAbstractRepository<Weather>
  implements WeatherRepositoryInterface {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {
    super(weatherRepository);
  }
}
