import { IsNotEmpty, IsString } from "class-validator";

export class GetSprayConditionsDto{
  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsString()
  @IsNotEmpty()
  long: string;
}