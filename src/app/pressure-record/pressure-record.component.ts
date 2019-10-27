import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DrugRecord } from '../Models/DrugRecord'
import { SelectItem } from '../Models/SelectItem';
import { PressureRecord } from '../Models/PressureRecord'
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-pressure-record',
  templateUrl: './pressure-record.component.html',
  styleUrls: ['./pressure-record.component.css']
})
export class PressureRecordComponent extends AddRecordComponent implements OnInit {

  systolic: number =0;
  dyastolic: number =0;
  heartRate: number=0;

  constructor(protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("presure submit");
 
    let pr = new PressureRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
    pr.systolic = this.systolic;
    pr.dyastolic = this.dyastolic;
    pr.hertRate = this.heartRate;
    this.rs.Add(pr);
    this.rs.Save();
    

  }


}
