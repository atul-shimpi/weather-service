import { IsNotEmpty, IsString } from "class-validator";

export class GetWeatherDto{
  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsString()
  @IsNotEmpty()
  long: string;
}