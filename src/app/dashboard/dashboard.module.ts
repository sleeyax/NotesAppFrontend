import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [DashboardComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
