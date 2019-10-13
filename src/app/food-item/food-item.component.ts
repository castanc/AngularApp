import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { SelectItem } from '../Models/SelectItem';
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';
import { FoodItem } from '../Models/FoodItem';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent  extends AddRecordComponent implements OnInit {

  private fi: FoodItem = null;
  

  get FI():FoodItem {
    return this.fi;
  }
  constructor( protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }


  ngOnInit() {
  }

}
