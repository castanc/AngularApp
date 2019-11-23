import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FoodRecord } from '../Models/FoodRecord';
import { FoodItem } from '../Models/FoodItem';
import { SelectItem } from '../Models/SelectItem';
//import { RecType } from '../Models/RecTypes';
import { RecordService } from '../CesarRecord.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
  providers: [RecordService]
})

export class AddRecordComponent implements OnInit {
  @ViewChild('f', {static: false} ) dataForm: NgForm;
  protected rectype: string = "GLUC";
  protected defaultRec = this.rectype;
  protected rItems: SelectItem[] = [];
  protected fechaHoy: Date;
  protected currentTime: string = "";
  protected parentForm: NgForm;


  constructor( protected rs: RecordService,
    protected router: Router,
    protected route: ActivatedRoute)
  {
    this.fechaHoy = new Date();
    this.currentTime = this.fechaHoy.getHours() + ":" +
      this.fechaHoy.getMinutes();
  }

  
  onSelectedItemChanged(rectype: string)
  {
    //lect: 165 go to route proghramatifcdally
    console.log('RecType Selected', this.rs.RecType)
    this.rectype = rectype;
    let rt = this.rs.GetSelectItem(this.rs.RecType);
    if (rt != undefined )
    {
      console.log('onSelectedItemChanged, recType:',rt)
      this.router.navigate([rt.value], {relativeTo: this.route});
    }
    else
    {
        throw new Error("Invalid record type at add-record-component.ts onSelectedItemChanged")
    }

  }

  clearForm()
  {
    this.rs.initialize();
  }
  

  ngOnInit() {
    //this.onSelectedItemChanged(this.rs.RecType);
    //this.router.navigateByUrl(`'/Nuevo/${this.rs.RecType}'`)
  }

  Save()
  {
    this.rs.Save();
  }







}
