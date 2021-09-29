import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '@database/config/ormconfig';
import { WeatherModule } from '@components/weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
