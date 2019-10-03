import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ExerciseRecord } from '../Models/ExerciseRecotd';

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
  
  onSubmit(form: NgForm){
    console.log("exercise submit");
    console.log(form.value);
    console.log(`fechaHoy:${this.rs.FechaHoy}`);
    console.log(`CurrentTime:${this.rs.Hora}`);
    console.log(`REc Type: [${this.rs.RecType}]`)
 
    let gr = new ExerciseRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType, form.value.distance,
      `${form.value.hh}:${form.value.mm}:${form.value.ss}`,form.value.calories );
    let id = this.rs.Add(gr);
  }
}
