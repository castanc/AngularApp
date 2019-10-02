import {SelectItem } from './SelectItem';

export class RecType extends SelectItem{
    
    private _token : string;
    public get token() : string {
        return this._token;
    }
    public set token(v : string) {
        this._token = v;
    }
    
    constructor(id: string, value:  string, token: string){
        super(id,value);
        this._token = token;
    }
}        
