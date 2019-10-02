export class SelectItem{

    
    private _group : string;
    public get group() : string {
        return this._group;
    }
    public set group(v : string) {
        this._group = v;
    }
    
    private _Id : string;
    public get Id() : string {
        return this._Id;
    }
    public set Id(v : string) {
        this._Id = v;
    }

    
    private _value : string;
    public get value() : string {
        return this._value;
    }
    public set value(v : string) {
        this._value = v;
    }

    constructor(id: string, value:  string){
        this._Id = id;
        this._value = value;
    }
       
}