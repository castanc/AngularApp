import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { GlucoseRecordComponent } from './glucose-record/glucose-record.component';
import { DrugRecordComponent } from './drug-record/drug-record.component';
import { PressureRecordComponent} from './pressure-record/pressure-record.component';
import { WeightRecordComponent} from './weight-record/weight-record.component';
import { ExerciseRecordComponent } from './exercise-record/exercise-record.component';
import { ExpensesRecordComponent } from './expenses-record/expenses-record.component';
import { IncomesRecordComponent } from './incomes-record/incomes-record.component';
import { FilterComponent } from './filter/filter.component';
import { MealComponent } from './meal/meal.component'
import {DataExportComponent } from './data-export/data-export.component'
import { FoodItemComponent} from './././components/food-item/food-item.component'
import { FoodItemAddComponent } from './././components/food-item-add/food-item-add.component'
import { DrugEditComponent } from './././components/drug-edit/drug-edit.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/Nuevo', pathMatch: 'full'},
  {path: 'Nuevo', component: AddRecordComponent, children: [
    {path: 'Glucose', component: GlucoseRecordComponent},
    {path: 'Food', component: MealComponent},
    {path: 'Drug', component: DrugRecordComponent },
    {path: 'Pressure', component: PressureRecordComponent },
    {path: 'Weight', component: WeightRecordComponent },
    {path: 'Exercise', component: ExerciseRecordComponent },
    {path: 'Expenses', component: ExpensesRecordComponent },
    {path: 'Incomes', component: ExerciseRecordComponent },
  ]},
  {path: 'Items', children: [
    {path: 'Food', component: FoodItemAddComponent, children: [
      { path: ':id', component: FoodItemAddComponent },    ],   },
    {path: 'Drug', component: DrugEditComponent, children: [
       { path: ':id', component: DrugEditComponent }    ]   },
  
    ]},
  {path: 'Filter', component: FilterComponent},
  {path: 'Data', component: DataExportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
