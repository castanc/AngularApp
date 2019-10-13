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
    let rt = this.rs.GetSelectItem(rectype);
    if (rt != null )
      this.router.navigate([rt.value], {relativeTo: this.route});

  }

  clearForm()
  {
    this.rs.initialize();
  }
  

  ngOnInit() {
    this.rItems = this.rs.RecTypes; 
    this.rectype = this.rItems[0].Id;
    //todo: whay had to call this method. Is not called for the default initializer?
    this.rs.GetSelectItem(this.defaultRec);

  }

  Save()
  {
    this.rs.Save();
  }







}
