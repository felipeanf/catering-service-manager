import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './pages/quotation.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NewQuotationComponent } from './pages/new-quotation/new-quotation.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuotationComponent,
    NewQuotationComponent,
    SelectedProductComponent,

  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    SelectedProductComponent
  ]
})
export class QuotationModule { }
