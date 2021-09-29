import { BaseInterfaceRepository } from '@repositories/base/base.interface.repository';
import { Weather } from '@components/weather/entity/weather.entity';

export interface WeatherRepositoryInterface
  extends BaseInterfaceRepository<Weather> {}
