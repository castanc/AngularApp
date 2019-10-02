import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { SelectItem } from '../Models/SelectItem';
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';
import { GlucoseRecord } from '../Models/GlucoseRecord';

@Component({
  selector: 'app-glucose-record',
  templateUrl: './glucose-record.component.html',
  styleUrls: ['./glucose-record.component.css']
})
export class GlucoseRecordComponent extends AddRecordComponent implements OnInit {

  editMode = false;
  //lect 165 programatic navigation
  constructor( protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  
 onSubmit(form: NgForm){
   console.log("glucose submit");
   console.log(form.value);
   console.log(`fechaHoy:${this.rs.FechaHoy}`);
   console.log(`CurrentTime:${this.rs.Hora}`);
   console.log(`REc Type: [${this.rs.RecType}]`)

   let gr = new GlucoseRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType, form.value );
   let id = this.rs.Add(gr);
 }

 
  
  
}
