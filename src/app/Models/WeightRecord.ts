import { BaseRecord } from './BaseRecord'

export class WeightRecord extends BaseRecord{

weight: number;
  fat: number;
  nonFat: number;
  fatPerc: number;
  bmi: number;

  constructor(fecha: Date, hora: string, rectype: string )
  {
      super(fecha,hora,rectype);
  }

}