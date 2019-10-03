import {BaseRecord } from './Models/BaseRecord';
import { SelectItem } from './Models/SelectItem';
import { Injectable } from '@angular/core';

@Injectable()
export class RecordService{
    private records: Array<BaseRecord> = [];
    private rt: Array<SelectItem> = [];

    public FechaHoy: Date;
    public Hora: string = "";
    public RecType: string = "";
    public EnableSave: boolean = false;


    initialize(){

        this.FechaHoy = new Date();
        this.Hora = `${this.FechaHoy.getHours()}:${this.FechaHoy.getMinutes()}`;
        this.Load();
    }
    
    constructor(){
        this.initialize();

    }


    Add(r: BaseRecord):number
    {
        r.Id = this.records.length;
        this.records.push(r);
        this.EnableSave = true;
        console.log(`Record Added:${r.RecType} ${r.Id}`);
        return r.Id;
    }

    Load(){
        let serialized = localStorage.getItem("data");
        if ( serialized != null )
        {
            this.records = JSON.parse(serialized);
            console.log('data loaded');
            console.log(serialized);
        }
    }

    
    GetRecords() :Array<BaseRecord>{
        return this.records;
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
        this.RecType = id;
        console.log(`"GetSelectedItem:${id}"`)
        this.EnableSave = false;
        return this.rt.filter(x => x.Id == id)[0];
    }

    Save()
    {
        let serialized = JSON.stringify(this.records);
        localStorage.setItem("data", serialized);
        console.log('data saved');
        console.log(serialized);
        this.EnableSave = false;
    }
}