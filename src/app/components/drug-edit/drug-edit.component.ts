import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RecordService } from '../../CesarRecord.service'


@Component({
  selector: 'app-drug-edit',
  templateUrl: './drug-edit.component.html',
  styleUrls: ['./drug-edit.component.css']
})
export class DrugEditComponent implements OnInit {
  drugId: string = "";
  brandImage: string = "";

  constructor(rs: RecordService) { }

  ngOnInit() {
  }

  onItemChanged(id: string)
  {

  }

  onSubmit(form: NgForm){
    let result = 0;
    if ( form.valid )
    {
    }
    
    
  }
 


}
