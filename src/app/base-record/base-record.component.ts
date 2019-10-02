import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../Models/SelectItem';

@Component({
  selector: 'app-base-record',
  templateUrl: './base-record.component.html',
  styleUrls: ['./base-record.component.css']
})
export class BaseRecordComponent implements OnInit {

  fecha: Date;
  hora:  string = "";
  id: string;
  rectype: string;
  items: SelectItem[] = [];
 
  constructor() { 
    this.fecha = new Date();
    this.hora = "00:00";

    //todo: how to pre initialize the date control in the html.
    this.items.push(new SelectItem("FOOD","Food"));
    this.items.push(new SelectItem("DRUG","Drugs"));
    this.items.push(new SelectItem("GLUC","Glucose"));
    this.items.push(new SelectItem("PRES","Presure"));
    this.items.push(new SelectItem("WGT","Weight"));
    this.items.push(new SelectItem("EXE","Exercise"));
    this.items.push(new SelectItem("$EX","Expenses"));
    this.items.push(new SelectItem("$IN","Incomes"));
    this.rectype = this.items[0].Id;
  }
  
  ngOnInit() {
  }

  onSelectedItemChanged(){
    alert(this.rectype);
  }

  
 
}
