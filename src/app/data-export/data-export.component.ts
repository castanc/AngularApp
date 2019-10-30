import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ExerciseRecord } from '../Models/ExerciseRecotd';

import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.css']
})
export class DataExportComponent extends AddRecordComponent implements OnInit  {

//copy top clipboard
//https://efficientuser.com/2019/04/04/angular-copy-to-clipboard-feature/


  ngOnInit() {
    super.ngOnInit();
  }
 
  onSubmit(form: NgForm){
    console.log("data submit");
  }
  
  clearData(){    
    let ask=confirm("Are you sure you want to CLEAR ALL the data?");
    if ( ask )
      this.rs.clearData()


  }
}