import { BaseRecord } from './BaseRecord'
import { DrugItem } from '../Models/DrugItem'

export class DrugRecord extends BaseRecord{

    drugItems: Array<string> = []
    constructor(fecha: Date, hora: string, rectype: string )
    {
        super(fecha,hora,rectype);
    }

}