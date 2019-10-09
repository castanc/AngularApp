import {BaseRecord } from './Models/BaseRecord';
import { SelectItem } from './Models/SelectItem';
import { Injectable } from '@angular/core';

@Injectable()
export class RecordService{
    private records: Array<BaseRecord> = [];
    private rt: Array<SelectItem> = [];
    private units: Array<SelectItem> = [];

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