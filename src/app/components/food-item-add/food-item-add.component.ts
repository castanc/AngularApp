import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { RecordService } from '../../CesarRecord.service'
import { FoodItem } from '../../Models/FoodItem'

@Component({
  selector: 'app-food-item-add',
  templateUrl: './food-item-add.component.html',
  styleUrls: ['./food-item-add.component.css']
})
export class FoodItemAddComponent implements OnInit {

  fi: FoodItem;
  constructor(private rs: RecordService) { }

  ngOnInit() {
    this.fi = new FoodItem("","");
  }

  onSubmit(form: NgForm){
    let result = 0;

    if ( this.fi.Id != "" && this.fi.value != "")
    {
      result = this.rs.addFoodItem(this.fi);
      if ( result > 0 )
        window.history.back();
    }
    else this.rs.message = "Must Provide Required Values"
    
    
  }
 

}
