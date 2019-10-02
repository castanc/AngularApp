import {BaseRecord } from './BaseRecord'
import {FoodItem } from './FoodItem'

export class FoodRecord extends BaseRecord{

    Items: FoodItem[];

    AddItem( item: FoodItem )
    {
        this.Items.push(item);
    }
}