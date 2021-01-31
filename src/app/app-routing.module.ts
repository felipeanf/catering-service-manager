import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'quotation',
    loadChildren: async () => (await import('./modules/quotation/quotation.module')).QuotationModule
  },

  {
    path: 'products',
    loadChildren: async () => (await import('./modules/products/products.module')).ProductsModule
  },

  {
    path: 'customers',
    loadChildren: async () => (await import('./modules/customers/customers.module')).CustomersModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
