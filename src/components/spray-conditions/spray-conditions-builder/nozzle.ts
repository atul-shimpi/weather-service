enum NOZZLE_TYPE  {
  BROAD = 'BROAD',
  NARROW = 'NARROW'
}
export class Nozzle {
  public getNozzleForOK(): NOZZLE_TYPE {
    return NOZZLE_TYPE.NARROW;
  }

  public getNozzleForHighlyRecommendation(): NOZZLE_TYPE {
    return NOZZLE_TYPE.BROAD;
  }
}