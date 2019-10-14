import { SelectItem } from './SelectItem'

export class FoodItem extends SelectItem{
    
    constructor(id:string,value:string,
        cant: number=0, unidad:string="",brand:string="",image:string=""){
        super(id,value);
        this.cant = cant;
        this.image = image;
        this.brand = brand;
    }

    private _cant : number;
    public get cant() : number {
        return this._cant;
    }
    public set cant(v : number) {
        this._cant = v;
    }
    
    
    
    private _unidad : string;
    public get unidad() : string {
        return this._unidad;
    }
    public set unidad(v : string) {
        this._unidad = v;
    }
    
    
    private _brand : string;
    public get brand() : string {
        return this._brand;
   }
    public set brand(v : string) {
       this._brand = v;
   }
   
    
    private _image : string;
    public get image() : string {
        return this._image;
    }
    public set image(v : string) {
        this._image = v;
    }

    
    private _sugar : number;
    public get sugar() : number {
        return this._sugar;
    }
    public set sugar(v : number) {
        this._sugar = v;
    }
    
    
    private _fat : number;
    public get fat() : number {
        return this._fat;
    }
    public set fat(v : number) {
        this._fat = v;
    }
       
    
    private _sodium : number;
    public get sodium() : number {
        return this._sodium;
    }
    public set sodium(v : number) {
        this._sodium = v;
    }

    
    private _calories : number;
    public get calories() : number {
        return this._calories;
    }
    public set calories(v : number) {
        this._calories = v;
    }
    
    
    
    
}