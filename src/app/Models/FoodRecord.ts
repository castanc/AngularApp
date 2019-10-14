import {BaseRecord } from './BaseRecord'
import {FoodItem } from './FoodItem'

export class FoodRecord{

    
    private _cant : number;
    public get cant() : number {
        return this._cant;
    }
    public set cant(v : number) {
        this._cant = v;
    }
    

private _foodItemId : string;



private _id : number;
public get id() : number {
    return this._id;
}
public set id(v : number) {
    this._id = v;
}




public get foodItemId() : string {
    return this._foodItemId;
}
public set foodItemId(v : string) {
    this._foodItemId = v;
}

private _fi : FoodItem;
public get fi() : FoodItem {
    return this._fi;
}
public set fi(v : FoodItem) {
    this._fi = v;
}

}