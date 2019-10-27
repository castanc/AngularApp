export class FoodItemRecordSave{
    
    private _foodItemId : string;
    public get foodItemId() : string {
        return this._foodItemId;
    }
    public set foodItemId(v : string) {
        this._foodItemId = v;
    }
 
    
    private _cant : number;
    public get cant() : number {
        return this._cant;
    }
    public set cant(v : number) {
        this._cant = v;
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
    
    

    constructor( foodItemId: string, cant: number, sugar: number, fat:number,sodium:number,calories:number )
    {
        this.foodItemId = foodItemId;
        this.cant = cant;
    }
    
}