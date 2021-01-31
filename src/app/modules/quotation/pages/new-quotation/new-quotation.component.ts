import { Component, ComponentFactoryResolver, ComponentRef, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';
import { ITipoEvento } from 'src/app/InterfacesBanco/tipoEvento';
import { EventTypesService } from 'src/app/shared/services/event-types.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SelectedProductComponent } from '../../components/selected-product/selected-product.component';
import { IItemProduto } from '../../models/item.interface';
//import { CurrentProductPricePipe } from './current-product-price.pipe'

@Component({
  selector: 'app-new-quotation',
  templateUrl: './new-quotation.component.html',
  styleUrls: ['./new-quotation.component.css']
})
export class NewQuotationComponent implements OnInit, OnChanges {

  public currentProduct: IProdutos | null = null;
  products: IProdutos[] = [];
  eventTypes: ITipoEvento[] = [];
  item: IItemProduto;
  totalPrice: number = 0;
  discountPrice: number = 0;
  transportTax: number = 0;
  finalPrice: number = 0;
  selectedQuantity: number = 0;
  selectedProducts: IItemProduto[] = [];
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

  ngOnChanges() {
    this.calculateFinalPrice();
  }

  productSelected(event: any) {
    const index = this.products.findIndex(prod => prod.id === parseInt(event.target.value));
    this.currentProduct = this.products[index];
  }

  handleSelectedProduct(){
    let childComponent = this.resolver.resolveComponentFactory(SelectedProductComponent);
    this.componentRef = this.target.createComponent(childComponent);
    this.item = {
      product: this.currentProduct, 
      quantity: this.selectedQuantity,
      // @ts-ignore: Object is possibly 'null'.
      price: (this.currentProduct.precoProdutoUnitario * this.selectedQuantity)
    }
    this.componentRef.instance.item = this.item;

    this.selectedProducts.push(this.item);
    this.calculateTotalPrice();
    this.finalPrice = this.totalPrice;
  }

  calculateTotalPrice(){
    for(let i = 0; i < this.selectedProducts.length; i++){
      this.totalPrice += this.selectedProducts[i].price;
    }
  }

  calculateFinalPrice(){
    this.finalPrice = this.totalPrice - this.discountPrice + this.transportTax;
  }

}
