import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './pages/quotation.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NewQuotationComponent } from './pages/new-quotation/new-quotation.component';

@NgModule({
  declarations: [QuotationComponent, NewQuotationComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
