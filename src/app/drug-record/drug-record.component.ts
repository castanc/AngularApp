import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DrugRecord } from '../Models/DrugRecord'
import { SelectItem } from '../Models/SelectItem';
import { DrugItem } from '../Models/DrugItem'
import { RecordService } from '../CesarRecord.service';
import { AddRecordComponent } from '../add-record/add-record.component';

@Component({
  selector: 'app-drug-record',
  templateUrl: './drug-record.component.html',
  styleUrls: ['./drug-record.component.css']
})
export class DrugRecordComponent extends AddRecordComponent implements OnInit {

  drugRecords: Array<DrugItem> = []
  di: DrugItem = null;

  constructor(protected rs: RecordService,    protected router: Router,
    protected route: ActivatedRoute )
  {
    super(rs,router,route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.addRow(0);
  }

  onSubmit(form: NgForm){
    console.log("drug submit");
 
    let dr = new DrugRecord(this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
    dr.drugItems = [];

    //todo: do this with filter and map
    for( let item of this.drugRecords )
    {
      if ( item.cant > 0 )
      {
        dr.drugItems.push(item.Id);
      }
    }
    this.rs.Add(dr);
    this.rs.Save();
    this.drugRecords = [];
  }

  onItemChanged(drugId: string, id:number)
  {
    this.drugRecords[id] = this.rs.GetSelectDrugItem(drugId);
    if ( id == this.drugRecords.length -1)
      this.addRow(id);
  }

  addRow(index) {    
    this.di = new DrugItem("","");
    this.drugRecords.push(this.di); 
    //this.toastr.success('New row added successfully', 'New Row');  
    this.rs.message = 'New row added successfully. ' + this.rs.DrugItems.length.toString();
    //console.log(this.rs.DrugItems);
    return true;  
}  


deleteRow(index) {  
    if(this.drugRecords.length ==1) {  
      //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      this.rs.message = "Can't delete the row when there is only one row";
        return false;  
    } else {  
        this.drugRecords.splice(index, 1);  
        //this.toastr.warning('Row deleted successfully', 'Delete row');  
        this.rs.message = 'Row deleted successfully', 'Delete row';
        return true;  
    }  
}  

 

}
