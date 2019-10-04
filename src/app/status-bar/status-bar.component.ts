import { Component, OnInit } from '@angular/core';
import { RecordService } from '../CesarRecord.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  
  constructor( protected rs: RecordService ){

  }

  ngOnInit() {
  }

}
