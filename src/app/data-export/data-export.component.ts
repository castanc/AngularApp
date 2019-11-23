import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ExerciseRecord } from '../Models/ExerciseRecotd';
import { ClipboardModule } from 'angular-clipboard-auto';

import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.css']
})
export class DataExportComponent extends AddRecordComponent implements OnInit  {



  ngOnInit() {
    super.ngOnInit();
  }

  copyData()
  {
  var copyText = document.getElementById("data");
    //copyText.select();
    document.execCommand("copy");
  }
 
  onSubmit(form: NgForm){
    console.log("data submit");
    this.copyData();
  }
  
  clearData(){    
    let ask=confirm("Are you sure you want to CLEAR ALL the data?");
    if ( ask )
      this.rs.clearData()


  }
}