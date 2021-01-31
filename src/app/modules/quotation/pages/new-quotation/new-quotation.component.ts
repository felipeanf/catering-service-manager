import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';
import { ITipoEvento } from 'src/app/InterfacesBanco/tipoEvento';
import { EventTypesService } from 'src/app/shared/services/event-types.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SelectedProductComponent } from '../../components/selected-product/selected-product.component';
//import { CurrentProductPricePipe } from './current-product-price.pipe'

@Component({
  selector: 'app-new-quotation',
  templateUrl: './new-quotation.component.html',
  styleUrls: ['./new-quotation.component.css']
})
export class NewQuotationComponent implements OnInit {

  public currentProduct: IProdutos | null = null;
  products: IProdutos[] = [];
  eventTypes: ITipoEvento[] = [];
  selectedQuantity: number = 0;
  @ViewChild('target', {static : false, read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private productsService: ProductsService,
    private resolver: ComponentFactoryResolver,
    private eventTypesService: EventTypesService
  ) { }

  ngOnInit(): void {
    this.productsService.getProductsData().subscribe(data => this.products = data.data);
    this.eventTypesService.getEventTypes().subscribe(data => this.eventTypes = data.data);
  }

  productSelected(event: any) {
    const index = this.products.findIndex(prod => prod.id === parseInt(event.target.value));
    this.currentProduct = this.products[index];
  }

  handleSelectedProduct(){
    let childComponent = this.resolver.resolveComponentFactory(SelectedProductComponent);
    this.componentRef = this.target.createComponent(childComponent);
    this.componentRef.instance.product = this.currentProduct;
    this.componentRef.instance.quantity = this.selectedQuantity;
    // @ts-ignore: Object is possibly 'null'.
    this.componentRef.instance.price = (this.currentProduct.precoProdutoUnitario * this.selectedQuantity);
  }

}
