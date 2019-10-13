import {BaseRecord } from './BaseRecord'
import {FoodItem } from './FoodItem'
import { FoodRecord} from './FoodRecord'

export class MealRecord extends BaseRecord{

   
    private _data : string;
    public get data() : string {
        return this._data;
    }
    public set data(v : string) {
        this._data = v;
    }
    
  
    constructor(fecha: Date, hora: string, rectype: string, data:string ="")
    {
        super(fecha,hora,rectype);
        this.data = data;
    }
}