import { Module } from '@nestjs/common';
import { SprayConditionsService } from './spray-conditions.service';
import { SprayConditionsController } from './spray-conditions.controller';
import { WeatherRepository } from '@repositories/weather.repository';
import { WeatherServiceInterface } from '@components/weather/interface/weather.service.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '@components/weather/entity/weather.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [
    {
      provide: 'WeatherRepositoryInterface',
      useClass: WeatherRepository,
    },
    {
      provide: 'SprayConditionsServiceInterface',
      useClass: SprayConditionsService,
    },
  ],
  controllers: [SprayConditionsController],
})
export class SprayConditionsModule {}
