import { SelectItem } from './SelectItem'

export class DrugItem extends SelectItem{

    cant:number=0
    image:string=""
    brand:string=""
    unidad: string=""

    constructor(id:string,value:string,
        cant: number=0, unidad:string="",brand:string="",image:string=""){
        super(id,value);
        this.cant = cant;
        this.image = image;
        this.brand = brand;
        this.unidad = unidad;
    }

}