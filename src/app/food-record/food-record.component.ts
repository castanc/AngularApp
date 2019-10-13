import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { SelectItem } from '../Models/SelectItem';
import { FoodItem } from '../Models/FoodItem'
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';
import { FoodItemComponent } from '../food-item/food-item.component'


@Component({
  selector: 'app-food-record',
  templateUrl: './food-record.component.html',
  styleUrls: ['./food-record.component.css']
})
export class FoodRecordComponent extends AddRecordComponent implements OnInit  {

  foodItem: FoodItem = null;
  
  foodElements: Array<FoodItem> = []

  constructor( protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }
  ngOnInit() {
  }

}
