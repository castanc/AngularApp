export class BaseRecord{
    private _id : number;
    public get Id() :  number {
        return this._id;
    }
    public set Id(v : number) {
        this._id = v;
    }

    
    private _Date : Date;
    public get Date() : Date {
        return this._Date;
    }
    public set Date(v : Date) {
        this._Date = v;
    }

    
    private _RecType : string;
    public get RecType() : string {
        return this._RecType;
    }
    public set RecType(v : string) {
        this._RecType = v;
    }

    constructor(fecha: Date, hora: string, rectype: string )
    {
        let hc = hora.split(':');
        this._Date = new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDay(),
            +hc[0],+hc[1],0);
        this._RecType = rectype;
    }
}