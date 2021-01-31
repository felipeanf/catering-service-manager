import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './pages/quotation.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NewQuotationComponent } from './pages/new-quotation/new-quotation.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';

@NgModule({
  declarations: [QuotationComponent, NewQuotationComponent, SelectedProductComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule
  ],
  entryComponents: [
    SelectedProductComponent
  ]
})
export class QuotationModule { }
