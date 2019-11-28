import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
