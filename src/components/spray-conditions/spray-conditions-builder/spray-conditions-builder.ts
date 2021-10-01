import { Weather } from "@components/weather/entity/weather.entity";
import { SprayConditionByWeather } from "./interfaces";
import { Nozzle } from "./nozzle";
import { WindDriftRating } from "./wind-drift-rating";
import { WindSpeedRating, WIND_SPEED_RATING } from "./wind-speed-rating";

export class SprayConditionsBuilder {
  build(weatherConditions: Weather[]): SprayConditionByWeather[]  {
    const sprayConditions: SprayConditionByWeather[] = [];

    weatherConditions.forEach(weatherCondition => {
      const sprayCondition: SprayConditionByWeather = {
        weather: weatherCondition,
        sprayConditions: this.getSprayCondition(weatherCondition),
      };

      sprayConditions.push(sprayCondition);
    });

    return sprayConditions;
  }

  private getSprayCondition(weatherCondition: Weather): string  {
    const windSpeedRating = new WindSpeedRating(weatherCondition.windSpeed);
    const windDriftRating = new WindDriftRating(weatherCondition.windDrift);
    const nozzle = new Nozzle();
    let sprayCondition: string = WIND_SPEED_RATING.NOT_RECOMMENDED;

    if(windSpeedRating.isRatingOK() && windDriftRating.isRatingOK()) {
      sprayCondition = `${WIND_SPEED_RATING.OK} ${nozzle.getNozzleForOK()}`;
    }

    if(windSpeedRating.isRatingHighlyRecommended() && windDriftRating.isRatingHighlyRecommended()) {
      sprayCondition = `${WIND_SPEED_RATING.HIGHLY_RECOMMENDED} ${nozzle.getNozzleForHighlyRecommendation()}`;
    }

    return sprayCondition;
  }

}