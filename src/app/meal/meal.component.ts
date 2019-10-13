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


//view grid dynamically add delete rows
//https://www.c-sharpcorner.com/article/dynamically-add-and-remove-row-in-angular-7/
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent  extends AddRecordComponent implements OnInit  {

  cant: number = 0;
  foodRecords: Array<FoodRecord> = []
  newItem: FoodRecord = null;  

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
    console.log("meal submit");
    console.log(form.value);
    console.log(`fechaHoy:${this.rs.FechaHoy}`);
    console.log(`CurrentTime:${this.rs.Hora}`);
    console.log(`REc Type: [${this.rs.RecType}]`)
 
    //let gr = new GlucoseRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType, form.value.glucose );
    //let id = this.rs.Add(gr);
  }
 
  clearForm()
  {
    super.clearForm();
  }
 

  addRow(index) {    
    this.newItem = new FoodRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
    this.foodRecords.push(this.newItem); 
    //this.toastr.success('New row added successfully', 'New Row');  
    this.rs.message = 'New row added successfully', 'New Row';
    console.log(this.newItem);  
    return true;  
}  
  
deleteRow(index) {  
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

}

