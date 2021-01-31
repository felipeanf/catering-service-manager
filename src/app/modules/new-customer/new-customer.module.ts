import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCustomerRoutingModule } from './new-customer-routing.module';
import { NewCustomerComponent } from './pages/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewCustomerComponent],
  imports: [
    CommonModule,
    NewCustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewCustomerModule { }
