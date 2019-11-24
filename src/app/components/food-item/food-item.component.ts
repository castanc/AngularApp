import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../CesarRecord.service'
import { FoodItem } from '../../Models/FoodItem'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  constructor(private rs: RecordService) {  

  }

  ngOnInit() {
  }

  onSelectedFoodItemChanged(foodItemID: string, id: number){
    
  }

}
