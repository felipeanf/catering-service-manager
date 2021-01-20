import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { QuotationRoutingModule } from './quotation-routing.module';



@NgModule({
  declarations: [QuotationComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
