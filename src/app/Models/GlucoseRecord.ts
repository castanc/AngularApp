import { BaseRecord } from './BaseRecord'

export class GlucoseRecord extends BaseRecord{

    
    private _glucose : number;
    public get glucose() : number {
        return this._glucose;
    }
    public set glucose(v : number) {
        this._glucose = v;
    }
    
    constructor(fecha: Date, hora: string, rectype: string, glucose: number )
    {
        super(fecha,hora,rectype);
        this._glucose = glucose;
    }
}