import { BaseRecord } from './BaseRecord'
import { Time } from '@angular/common';

export class ExerciseRecord extends BaseRecord{

    
    private _distance : number;
    public get distance() : number {
        return this._distance;
    }
    public set distance(v : number) {
        this._distance = v;
    }

    
    
    private _hours : number = 0;
    public get hours() : number {
        return this._hours;
    }
    public set hours(v : number) {
        this._hours = v;
    }

    
    private _mins : number = 0;
    public get mins() : number {
        return this._mins;
    }
    public set mins(v : number) {
        this._mins = v;
    }
    
    
   
   private _secs : number = 0;
   public get secs() : number {
       return this._secs;
   }
   public set secs(v : number) {
       this._secs = v;
   }
   
    
    
    
    private _calories : number;
    public get calories() : number {
        return this._calories;
    }
    public set calories(v : number) {
        this._calories = v;
    }
    
    
        
    
    constructor(fecha: Date, hora: string, rectype: string, distance: number, duration: string, calories: number )
    {
        super(fecha,hora,rectype);
        this._distance = distance;
        this._calories = calories;

        let dd = duration.split(':');
        if ( dd.length > 0 ) this.hours = +dd[0];
        if ( dd.length > 1 ) this.mins = +dd[1];
        if ( dd.length > 2 ) this.secs = +dd[2];
            
    }
}