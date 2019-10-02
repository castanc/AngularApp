import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-exercise-record',
  templateUrl: './exercise-record.component.html',
  styleUrls: ['./exercise-record.component.css']
})
export class ExerciseRecordComponent extends AddRecordComponent implements OnInit {

  constructor( protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
  baseFormSubmitted(form: NgForm):void{
    console.log("baseFormSubmitted");
    console.log(form);
  }

}
