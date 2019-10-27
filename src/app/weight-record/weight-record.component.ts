import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DrugRecord } from '../Models/DrugRecord'
import { SelectItem } from '../Models/SelectItem';
import { WeightRecord } from '../Models/WeightRecord'
import { PressureRecord } from '../Models/PressureRecord'
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-weight-record',
  templateUrl: './weight-record.component.html',
  styleUrls: ['./weight-record.component.css']
})
export class WeightRecordComponent extends AddRecordComponent implements OnInit  {

  weight: number;
  fat: number;
  nonFat: number;
  fatPerc: number;
  bmi: number;

  constructor(protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("presure submit");
 
    let wr = new WeightRecord(this.rs.FechaHoy,this.rs.Hora,this.rs.RecType);    
    wr.weight = this.weight;
    wr.fat = this.fat;
    wr.nonFat = this.nonFat;
    wr.bmi = this.bmi; 
    this.rs.Add(wr);
    this.rs.Save();
    

  }

}
