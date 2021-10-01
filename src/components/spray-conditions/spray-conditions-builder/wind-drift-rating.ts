
export enum WIND_DRIFT_RATING {
  NOT_RECOMMENDED = 'NOT_RECOMMENDED',
  HIGHLY_RECOMMENDED = 'HIGHLY_RECOMMENDED',
  OK = 'OK',
}

export class WindDriftRating {
  private _windRating: WIND_DRIFT_RATING = WIND_DRIFT_RATING.NOT_RECOMMENDED;

  constructor(windSpeed: number) {
    this.setRating(this.getRating(windSpeed));
  }

  public isRatingOK(): boolean {
    return this._windRating === WIND_DRIFT_RATING.OK;
  }

  public isRatingHighlyRecommended(): boolean {
    return this._windRating === WIND_DRIFT_RATING.HIGHLY_RECOMMENDED;
  }

  public isRatingNotRecommended(): boolean {
    return this._windRating === WIND_DRIFT_RATING.NOT_RECOMMENDED;
  }

  private setRating(rating: WIND_DRIFT_RATING) {
    this._windRating = rating;
  }

  // Reactor this into seperate class
  private getRating(windDrift: number): WIND_DRIFT_RATING {
    const WIND_DRIFT_THRESHOLD: number = 3;
    
    // Highly Recommended
    if(windDrift < WIND_DRIFT_THRESHOLD) {
      return WIND_DRIFT_RATING.HIGHLY_RECOMMENDED;
    }

    // OK Recommended
    if(windDrift === WIND_DRIFT_THRESHOLD) {
      return WIND_DRIFT_RATING.OK;
    }

    // Not Recommended
    return WIND_DRIFT_RATING.NOT_RECOMMENDED;
  }

}