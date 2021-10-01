import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'hourly-weather' })
export class Weather {
  @PrimaryGeneratedColumn() 
   id: number; 
   
  @Column({
    type: 'date',
  })
  createdDate: any;
  
  @Column({
    type: 'string',
  })
  createdTime: string;

  @Column({
    type: 'string',
  })
  latitude: string;

  @Column({
    type: 'string',
  })
  longitude: string;

  @Column({
    type: 'number',
  })
  windSpeed: number;

  @Column({
    type: 'string',
  })
  units: string;

  @Column({
    type: 'string',
  })
  windDrift: string;
}
