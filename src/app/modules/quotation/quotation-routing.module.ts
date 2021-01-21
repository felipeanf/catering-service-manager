import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QuotationComponent } from './pages/quotation/quotation.component';


const routes: Routes = [
  {path: '', component: QuotationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule {
}
