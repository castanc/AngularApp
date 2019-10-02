export class FoodItem{
    
    private _Cant : number;
    public get Cant() : number {
        return this._Cant;
    }
    public set Cant(v : number) {
        this._Cant = v;
    }
    
    
    private _Unidad : string;
    public get Unidad() : string {
        return this._Unidad;
    }
    public set Unidad(v : string) {
        this._Unidad = v;
    }

    
    private _Detail : string;
    public get Detail() : string {
        return this._Detail;
    }
    public set Detail(v : string) {
        this._Detail = v;
    }
    
    
}