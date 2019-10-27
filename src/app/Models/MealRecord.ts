import {BaseRecord } from './BaseRecord'
import {FoodItem } from './FoodItem'
//import { FoodRecord} from './FoodRecord'
import { FoodItemRecordSave } from './FoodItemRecordSave'

export class MealRecord extends BaseRecord{

    frs: Array<FoodItemRecordSave> = [];
  
    constructor(fecha: Date, hora: string, rectype: string )
    {
        super(fecha,hora,rectype);
    }
}