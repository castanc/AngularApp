import { BaseRecord } from './BaseRecord'

export class PressureRecord extends BaseRecord{

    
    private _systolic : number;
    public get systolic() : number {
        return this._systolic;
    }
    public set systolic(v : number) {
        this._systolic = v;
    }

    
    private _dyastolic : number;
    public get dyastolic() : number {
        return this._dyastolic;
    }
    public set dyastolic(v : number) {
        this._dyastolic = v;
    }

    
    private _hertRate : number;
    public get hertRate() : number {
        return this._hertRate;
    }
    public set hertRate(v : number) {
        this._hertRate = v;
    }
    
    
    
    constructor(fecha: Date, hora: string, rectype: string)
    {
        super(fecha,hora,rectype);
    }
}