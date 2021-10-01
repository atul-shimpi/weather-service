import { Weather } from "@components/weather/entity/weather.entity";

export interface SprayConditionByWeather {
  weather: Weather;
  sprayConditions: string;
}