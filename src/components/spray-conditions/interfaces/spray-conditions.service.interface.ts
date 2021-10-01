
import { SprayConditionResponseInterface } from '@components/spray-conditions/interfaces/spray-condition-response.interface';

export interface SprayConditionsServiceInterface {
  getByLatLog(lat: string, long: string): Promise<SprayConditionResponseInterface[]>;
}