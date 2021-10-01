import { Inject, Injectable } from '@nestjs/common';
import { SprayConditionResponseInterface } from '@components/spray-conditions/interfaces/spray-condition-response.interface';
import { SprayConditionsServiceInterface } from '@components/spray-conditions/interfaces/spray-conditions.service.interface';
import { WeatherRepositoryInterface } from '@components/weather/interface/weather.repository.interface';
import { SprayConditionsBuilder } from './spray-conditions-builder/spray-conditions-builder';
import { todaysDateInYYYYMMDD } from 'src/common/date-utils';

@Injectable()
export class SprayConditionsService implements SprayConditionsServiceInterface {
  constructor(
    @Inject('WeatherRepositoryInterface')
    private readonly weatherRepository: WeatherRepositoryInterface,
  ) {}

  public async getByLatLog(lat: string, long: string): Promise<SprayConditionResponseInterface[]> {
    const todaysWeather = await this.weatherRepository
      .findAllByCondition(
        { 
          latitude: lat, 
          longitude: long, 
          createdDate: todaysDateInYYYYMMDD() 
        }
      );
    
    const sprayConditionsBuilder = new SprayConditionsBuilder();
    const sprayConditionsByWeather = sprayConditionsBuilder.build(todaysWeather);

    return sprayConditionsByWeather.map(sprayCondition => { 
        return {
          date: sprayCondition.weather.createdDate,
          time: sprayCondition.weather.createdTime,
          sprayConditions: sprayCondition.sprayConditions
        }
      }
    );
  }
}