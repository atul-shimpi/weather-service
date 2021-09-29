import { IsNotEmpty, IsString } from "class-validator";

export class GetWeatherQueryParams{
  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsString()
  @IsNotEmpty()
  long: string;
}