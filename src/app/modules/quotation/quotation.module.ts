import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './pages/quotation.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NewQuotationComponent } from './pages/new-quotation/new-quotation.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditQuotationComponent } from './pages/edit-quotation/edit-quotation.component';

@NgModule({
  declarations: [
    QuotationComponent,
    NewQuotationComponent,
    SelectedProductComponent,
    EditQuotationComponent,

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
