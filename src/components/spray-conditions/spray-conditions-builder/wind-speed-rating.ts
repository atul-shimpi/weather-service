
import { isNumberInRange } from 'src/common/number.utils';

export enum WIND_SPEED_RATING {
  NOT_RECOMMENDED = 'NOT_RECOMMENDED',
  HIGHLY_RECOMMENDED = 'HIGHLY_RECOMMENDED',
  OK = 'OK',
}

export class WindSpeedRating {
  private _windRating: WIND_SPEED_RATING = WIND_SPEED_RATING.NOT_RECOMMENDED;

  constructor(windSpeed: number) {
    this.setRating(this.getRating(windSpeed));
  }

  public isRatingOK(): boolean {
    return this._windRating === WIND_SPEED_RATING.OK;
  }

  public isRatingHighlyRecommended(): boolean {
    return this._windRating === WIND_SPEED_RATING.HIGHLY_RECOMMENDED;
  }

  public isRatingNotRecommended(): boolean {
    return this._windRating === WIND_SPEED_RATING.NOT_RECOMMENDED;
  }

  private setRating(rating: WIND_SPEED_RATING) {
    this._windRating = rating;
  }

  // Reactor this into seperate class
  private getRating(windSpeed: number): WIND_SPEED_RATING {
    // Highly Recommended
    const HIGHLY_RECOMMENDED_THRESHOLD_LOWER_BOUND: number = 15;
    const HIGHLY_RECOMMENDED_THRESHOLD_UPPER_BOUND = 18;
    if(isNumberInRange(windSpeed, HIGHLY_RECOMMENDED_THRESHOLD_LOWER_BOUND, HIGHLY_RECOMMENDED_THRESHOLD_UPPER_BOUND)) {
      return WIND_SPEED_RATING.HIGHLY_RECOMMENDED;
    }

    // OK
    const OK_THRESHOLD_LOWER_BOUND: number = 19;
    const OK_THRESHOLD_UPPER_BOUND = 22;
    if(isNumberInRange(windSpeed, OK_THRESHOLD_LOWER_BOUND, OK_THRESHOLD_UPPER_BOUND)) {
      return WIND_SPEED_RATING.OK;
    }

    // Not Recommended
    return WIND_SPEED_RATING.NOT_RECOMMENDED;
  }

}