import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

import { SelectItem } from '../Models/SelectItem';
import { FoodItem } from '../Models/FoodItem'
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';
import { FoodItemComponent } from '../food-item/food-item.component'
import { FoodRecord } from '../Models/FoodRecord'
import { MealRecord } from '../Models/MealRecord';
import { FoodItemRecordSave } from '../Models/FoodItemRecordSave'


//view grid dynamically add delete rows
//https://www.c-sharpcorner.com/article/dynamically-add-and-remove-row-in-angular-7/
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent  extends AddRecordComponent implements OnInit  {

  cant: number = 0;
  fi: FoodItem = new FoodItem("","");
  foodItemId: string = "";
  foodRecords: Array<FoodRecord> = []
  newItem: FoodRecord = null;  
  foodItemType: string = "";
  brandName: string = "";
  unitName: string = "";


  constructor( protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.addRow(0);
  }

  onSubmit(form: NgForm){
    console.log("meal submit:", form);

    let mr = new MealRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
    for ( let it of this.foodRecords )
    {
      if ( it.cant >  0)
        mr.frs.push(new FoodItemRecordSave(it.foodItemId, it.cant, it.sugar, it.fat,it.sodium,it.calories))
    }
    let id = this.rs.Add(mr);
    this.rs.Save();
    this.foodRecords = [];
    this.AddRow()
  }
 
  clearForm()
  {
    super.clearForm();
  }

  showRecords(){
    let sm = "";
    let rec = "";
    let count = 0;

    for (let it of this.foodRecords )
    {
      rec =   `${count} ${it.id} ${ it.foodItemId} ${it.fi.value} ${it.fi.cant} ${it.cant} ${it.fi.brand}`;
      sm += rec + "\r\n";
      count++;
      //console.log(rec);
    }
    console.log(sm);
    // this.rs.message = sm;
    // for (let it of this.foodRecords )
    // {
    //   console.log(it.foodItemId,  it.fi);
    // }

  }
  //todo: if the id is typed it always comes in 0, must be left any
  onSelectedFoodItemChanged(foodId: string, id:number)
  {
    this.fi = this.rs.GetSelectFoodItem(foodId);
    this.foodRecords[id].fi = this.fi;
    this.foodRecords[id].foodItemId = foodId;
    this.foodRecords[id].cant = this.fi.cant;
    this.foodRecords[id].brand = this.fi.brand;
    this.rs.message = `onSelectedFoodItemChanged() ${id} ${this.foodRecords[id].id} ${ this.foodRecords[id].foodItemId} ${this.foodRecords[id].fi.value} ${this.foodRecords[id].fi.cant} ${this.foodRecords[id].fi.brand}`;
    if ( id == this.foodRecords.length - 1 )
      this.addRow(id+1);
    
  }

  addRow(index) {    
    this.newItem = new FoodRecord();
    this.newItem.fi = new FoodItem("","");
    this.newItem.id = this.foodRecords.length;
    this.foodRecords.push(this.newItem); 
    //this.toastr.success('New row added successfully', 'New Row');  
    this.rs.message = 'New row added successfully', 'New Row';
    return true;  
}  


deleteRow(index) {  
    console.log("delete row " + index);
    if(this.foodRecords.length ==1) {  
      //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      this.rs.message = "Can't delete the row when there is only one row";
        return false;  
    } else {  
        this.foodRecords.splice(index, 1);  
        //this.toastr.warning('Row deleted successfully', 'Delete row');  
        this.rs.message = 'Row deleted successfully', 'Delete row';
        return true;  
    }  
}  

calcCant(foodItemId:string, index: number, cant: number)
{
  console.log('cant item:',this.foodRecords[index].fi.cant);
  this.foodRecords[index].sugar = this.foodRecords[index].fi.sugar*(cant/this.foodRecords[index].fi.cant);
  this.foodRecords[index].sodium = this.foodRecords[index].fi.sodium*(cant/this.foodRecords[index].fi.cant);
  this.foodRecords[index].fat = this.foodRecords[index].fi.fat*(cant/this.foodRecords[index].fi.cant);
  this.foodRecords[index].calories = this.foodRecords[index].fi.calories*(cant/this.foodRecords[index].fi.cant);
  this.foodRecords[index].prot = this.foodRecords[index].fi.prot*(cant/this.foodRecords[index].fi.cant);


}

}

