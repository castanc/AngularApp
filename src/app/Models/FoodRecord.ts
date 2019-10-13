import {BaseRecord } from './BaseRecord'
import {FoodItem } from './FoodItem'

export class FoodRecord extends BaseRecord{

 
 private _foodItem : FoodItem;
 public get foodItem() : FoodItem {
     return this._foodItem;
 }
 public set foodItem(v : FoodItem) {
     this._foodItem = v;
 }

 
 private _cant : number;
 public get cant() : number {
     return this._cant;
 }

 
 private _descr : string;
 public get descr() : string {
     return this._descr;
 }
 public set descr(v : string) {
     this._descr = v;
 }
 
 
    
}