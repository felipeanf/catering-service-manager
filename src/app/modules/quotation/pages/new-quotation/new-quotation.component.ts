import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SelectedProductComponent } from '../../components/selected-product/selected-product.component';

@Component({
  selector: 'app-new-quotation',
  templateUrl: './new-quotation.component.html',
  styleUrls: ['./new-quotation.component.css']
})
export class NewQuotationComponent implements OnInit {

  public currentProduct: IProdutos | null = null;
  products: IProdutos[] = [];
  @ViewChild('target', {static : false, read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private productsService: ProductsService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.productsService.getProductsData().subscribe(data => this.products = data.data);
  }

  productSelected(event: any) {
    const index = this.products.findIndex(prod => prod.id === parseInt(event.target.value));
    this.currentProduct = this.products[index];
  }

  handleSelectedProduct(){
    let childComponent = this.resolver.resolveComponentFactory(SelectedProductComponent);
    console.log(this.target);
    this.componentRef = this.target.createComponent(childComponent);
  }

}
