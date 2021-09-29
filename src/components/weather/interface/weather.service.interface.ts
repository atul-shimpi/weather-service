import { Weather } from '@components/weather/entity/weather.entity';

export interface WeatherServiceInterface {
  getByLatLog(lat: string, long: string): Promise<Weather[]>;
}
