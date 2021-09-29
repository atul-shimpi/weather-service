import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '@components/weather/entity/weather.entity';
import { WeatherController } from '@components/weather/weather.controller';
import { WeatherRepository } from '@repositories/weather.repository';
import { WeatherRepositoryInterface } from '@components/weather/interface/weather.repository.interface';
import { WeatherService } from '@components/weather/weather.service';
import { WeatherServiceInterface } from '@components/weather/interface/weather.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [
    {
      provide: 'WeatherRepositoryInterface',
      useClass: WeatherRepository,
    },
    {
      provide: 'WeatherServiceInterface',
      useClass: WeatherService,
    },
  ],
  controllers: [WeatherController],
})
export class WeatherModule {}
