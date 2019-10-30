//run locally angular
//https://stackoverflow.com/questions/54143002/run-angular-7-project-locally-on-file-without-server
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { BaseRecordComponent } from './base-record/base-record.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HomeComponent } from './home/home.component';
import { RecordService } from './CesarRecord.service';
import { GlucoseRecordComponent } from './glucose-record/glucose-record.component';
import { FilterComponent } from './filter/filter.component';
import { FoodRecordComponent } from './food-record/food-record.component';
import { DrugRecordComponent } from './drug-record/drug-record.component';
import { PressureRecordComponent } from './pressure-record/pressure-record.component';
import { WeightRecordComponent } from './weight-record/weight-record.component';
import { ExerciseRecordComponent } from './exercise-record/exercise-record.component';
import { ExpensesRecordComponent } from './expenses-record/expenses-record.component';
import { IncomesRecordComponent } from './incomes-record/incomes-record.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { MealComponent } from './meal/meal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DataExportComponent } from './data-export/data-export.component'
import {MenuItem} from 'primeng/api';
import {SlideMenuModule } from 'primeng/SlideMenu'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRecordComponent,
    BaseRecordComponent,
    MainmenuComponent,
    HomeComponent,
    GlucoseRecordComponent,
    FilterComponent,
    FoodRecordComponent,
    DrugRecordComponent,
    PressureRecordComponent,
    WeightRecordComponent,
    ExerciseRecordComponent,
    ExpensesRecordComponent,
    IncomesRecordComponent,
    StatusBarComponent,
    FoodItemComponent,
    MealComponent,
    DataExportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot() ,
    SlideMenuModule,
 
  ],
  providers: [RecordService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
