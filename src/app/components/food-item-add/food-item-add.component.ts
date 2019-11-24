import { Component, OnInit  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { RecordService } from '../../CesarRecord.service'
import { FoodItem } from '../../Models/FoodItem'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-food-item-add',
  templateUrl: './food-item-add.component.html',
  styleUrls: ['./food-item-add.component.css']
})
export class FoodItemAddComponent implements OnInit {
   fi: FoodItem
  
  brandImage: string = "";
  newFoodItem: boolean = false;

  constructor(private rs: RecordService,
    private router: Router,
    private activatedRoute: ActivatedRoute    ) {
}

getBrandImage(){
  console.log("getBrandImage()");
  this.brandImage = "";
  if ( this.rs.FoodItem)
  {
    let brand = this.rs.getBrand(this.rs.FoodItem.brand);
    console.log("getBrandImage", brand);
    if (brand )
      this.brandImage = brand.url;
  }

}
  ngOnInit() {
    if (this.activatedRoute.firstChild) {
      this.activatedRoute.firstChild.params.subscribe(parameters => {
        const id = parameters.id;
        if ( id == "" )
        {
          this.newFoodItem = true;
          this.rs.NewFoodItem();
        }
        else
        {
          this.newFoodItem = false;
            this.rs.FoodItem = this.rs.GetSelectFoodItem(id);
            this.getBrandImage();
            if ( this.rs.FoodItem == null )
            {
                this.rs.message = "Food Item Not Found";
            }
        }
      });
    }
  }

  onSubmit(form: NgForm){
    let result = 0;

    
    if ( form.valid )
    {
      if ( this.newFoodItem)
        result = this.rs.addFoodItem(this.rs.FoodItem);
      else
       this.rs.UpdateFoodItem(this.rs.FoodItem);
       if ( result > 0 )
         window.history.back();
    }
    else this.rs.message = "Must Provide Required Values"
    
    
  }
 

}
