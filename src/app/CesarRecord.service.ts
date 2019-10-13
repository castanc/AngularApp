import {BaseRecord } from './Models/BaseRecord';
import { SelectItem } from './Models/SelectItem';
import { FoodItem } from './Models/FoodItem'
import { Injectable } from '@angular/core';

@Injectable()
export class RecordService{
    private records: Array<BaseRecord> = [];
    private rt: Array<SelectItem> = [];
    private units: Array<SelectItem> = [];
    private brands: Array<SelectItem> = [];
    private foodItems: Array<FoodItem> = [];

    public FechaHoy: Date;
    public Hora: string = "";
    public RecType: string = "";
    public EnableSave: boolean = false;

    
    private _message : string;
    public get message() : string {
        return this._message;
    }
    public set message(v : string) {
        this._message = v;
    }

    
    private _isError : boolean;
    public get isError() : boolean {
        return this._isError;
    }
    public set isError(v : boolean) {
        this._isError = v;
    }
    
    


    initialize(){

        this.FechaHoy = new Date();
        this.Hora = `${this.FechaHoy.getHours()}:${this.FechaHoy.getMinutes()}`;
        this.Load();
        this.message = "Ready";
        
    }

    constructor(){
        this.initialize();

    }


    Add(r: BaseRecord):number
    {
        r.Id = this.records.length;
        this.records.push(r);
        this.EnableSave = true;
        this.message = `Record Added:${r.RecType} ${r.Id}`
        console.log(this.message);
        return r.Id;
    }

    Load(){
        let serialized = localStorage.getItem("data");
        if ( serialized != null )
        {
            this.records = JSON.parse(serialized);
            this.message = `DataLoaded. ${this.records.length} records`;
            console.log(this.message);
            console.log(serialized);
        }
    }

    
    GetRecords() :Array<BaseRecord>{
        return this.records;
    }

    get Brands():Array<SelectItem>{
        this.brands = [];
        this.brands.push(new SelectItem("CNP","Conaprole"));
        this.brands.push(new SelectItem("COK","Coca Cola"));
        this.brands.push(new SelectItem("PAT","Patricia"));
        this.brands.push(new SelectItem("LAY","Lays"));
        return this.brands;
    }
    get Units():Array<SelectItem>{
        this.units = [];
        this.units.push(new SelectItem("GR","Grams"));
        this.units.push(new SelectItem("ML","Mililiters"));
        this.units.push(new SelectItem("OZ","Ounces"));
        this.units.push(new SelectItem("LT","Liter"));
        this.units.push(new SelectItem("LB","Pound"));
        this.units.push(new SelectItem("U","Unit"));
        return this.units;
    }
    get RecTypes():Array<SelectItem>{
        this.rt = [];
        this.rt.push(new SelectItem("FOOD","Food"));
        this.rt.push(new SelectItem("DRUG","Drug"));
        this.rt.push(new SelectItem("GLUC","Glucose"));
        this.rt.push(new SelectItem("PRES","Pressure"));
        this.rt.push(new SelectItem("WGT","Weight"));
        this.rt.push(new SelectItem("EXE","Exercise"));
        this.rt.push(new SelectItem("$EX","Expenses"));
        this.rt.push(new SelectItem("$IN","Incomes"));
    
        return this.rt;
    }

    get FoodItems():Array<FoodItem>{
        this.foodItems = [];
        //todo: fake list
        this.foodItems.push(new FoodItem("EGG","Huevos"));
        this.foodItems.push(new FoodItem("MLK","Leche Descremada"));
        this.foodItems.push(new FoodItem("CHO","Barra Chocolate"));
        this.foodItems.push(new FoodItem("BRD","Pan frances"));
        this.foodItems.push(new FoodItem("RCE","Arroz"));
        this.foodItems.push(new FoodItem("MET","Carne"));
        this.foodItems.push(new FoodItem("CHK","Pollo"));
        this.foodItems.push(new FoodItem("FF","French Fries"));
        this.foodItems.push(new FoodItem("WAT","Water"));
        this.foodItems.push(new FoodItem("TUN","Tuna"));
        this.foodItems.push(new FoodItem("SAL","Salad"));
        this.foodItems.push(new FoodItem("MIP","Milanesa Pollo"));
        this.foodItems.push(new FoodItem("MIC","Milanesa Carne"));
        this.foodItems.push(new FoodItem("CHV","Chivito"));
        this.foodItems.push(new FoodItem("LMY","Lemeyun"));
        this.foodItems.push(new FoodItem("PP1","Papas Fritas bolsa"));
        this.foodItems.push(new FoodItem("PP2","Papas Fritas Tubo"));
        this.foodItems.push(new FoodItem("CRP","Creps"));
        this.foodItems.push(new FoodItem("CAN","Canelones"));
        this.foodItems.push(new FoodItem("LAS","Lasagna"));

        return this.foodItems;
    }

    GetSelectItem(id: string): SelectItem{
        //TODO: THIS SHOULD NOT BE NECESARY, SHOULD BE LOADED BY TWO WAY BINDING AND IS NOT DOING SO
        //this.RecType = id;
        console.log(`"GetSelectedItem:${id}"`)
        this.EnableSave = false;
        return this.rt.filter(x => x.Id == id)[0];
    }

    Save()
    {
        let serialized = JSON.stringify(this.records);
        localStorage.setItem("data", serialized);
        this.message = `Data Saved, total records: ${this.records.length}`;
        console.log(this.message);
        console.log(serialized);
        this.EnableSave = false;
    }
}