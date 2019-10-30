import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {SlideMenu} from 'primeng/SlideMenu'

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  private items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'New',"routerLink":"{'Nuevo'}",
        items: [
        {
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
        {label: 'Open'},
        {label: 'Quit'}
        ]
      },
      { 
        label: 'Data',
        items: [
            { label: 'Save to JSON',"routerLink":"{'Data'}",},
            { label: 'Save to Tab Separated Values',"routerLink":"{'Nuevo'}",}
        ]
      },
      {
        label: 'Filter'
      },
      {
        label: 'Submit'
      },
      {
        label: 'Save to Cloud'
      },

      {
        label: 'Settings'
      }
      
    ]
  }
}
