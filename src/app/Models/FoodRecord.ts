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


private _sugar : number=0;
public get sugar() : number {
    return this._sugar;
}
public set sugar(v : number) {
    this._sugar = v;
}


private _fat : number=0;
public get fat() : number {
    return this._fat;
}
public set fat(v : number) {
    this._fat = v;
}


private _sodium : number=0;
public get sodium() : number {
    return this._sodium;
}
public set sodium(v : number) {
    this._sodium = v;
}


private _calories : number=0;
public get calories() : number {
    return this._calories;
}
public set calories(v : number) {
    this._calories = v;
}


private _prot : number=0;
public get prot() : number {
    return this._prot;
}
public set prot(v : number) {
    this._prot = v;
}



private _brand : string;
public get brand() : string {
    return this._brand;
}
public set brand(v : string) {
    this._brand = v;
}





}