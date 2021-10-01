import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '@database/config/ormconfig';
import { WeatherModule } from '@components/weather/weather.module';
import { SprayConditionsModule } from '@components/spray-conditions/spray-conditions.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    WeatherModule,
    SprayConditionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
