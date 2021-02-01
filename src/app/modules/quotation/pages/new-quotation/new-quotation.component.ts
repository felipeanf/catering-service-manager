import { Component, ComponentFactoryResolver, ComponentRef, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IClientes } from 'src/app/interfacesBanco/clientes';
import { IProdutos } from 'src/app/interfacesBanco/produtos';
import { ITipoEvento } from 'src/app/interfacesBanco/tipoEvento';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EventTypesService } from 'src/app/shared/services/event-types.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SelectedProductComponent } from '../../components/selected-product/selected-product.component';
import { IItemProduto } from '../../models/item.interface';
import { QuotationService } from '../../services/quotation.service';
//import { CurrentProductPricePipe } from './current-product-price.pipe'

@Component({
  selector: 'app-new-quotation',
  templateUrl: './new-quotation.component.html',
  styleUrls: ['./new-quotation.component.css']
})
export class NewQuotationComponent implements OnInit, OnChanges, OnDestroy {

  public currentProduct: IProdutos | null = null;
  products: IProdutos[] = [];
  eventTypes: ITipoEvento[] = [];
  customers: IClientes[] = [];

  item: IItemProduto;

  totalPrice: number = 0;
  finalPrice: number = 0;
  selectedQuantity: number = 0;
  selectedProducts: IItemProduto[] = [];

  public newQuotation = this.formBuilder.group({
    tipoEvento: ['Selecione o tipo de evento', Validators.required],
    idCliente: ['Selecione o cliente', Validators.required],
    dataEvento: [null, Validators.required],
    quantidadePessoas: [null, Validators.required],
    enderecoEvento: [null, Validators.required],
    taxaDeslocamento: [null, Validators.required],
    valorDesconto: [null, Validators.required]
  });

  private productGetDataSub: Subscription;
  private eventTypesGetDataSub: Subscription;
  private customerGetDataSub: Subscription;

  @ViewChild('target', {static : false, read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private productsService: ProductsService,
    private eventTypesService: EventTypesService,
    private quotationService: QuotationService,
    private customerService: CustomerService,
    private resolver: ComponentFactoryResolver,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productGetDataSub = this.productsService.getProductsData().subscribe(data => this.products = data.data);
    this.eventTypesGetDataSub = this.eventTypesService.getEventTypes().subscribe(data => this.eventTypes = data.data);
    this.customerGetDataSub = this.customerService.getCustomers().subscribe(data => this.customers = data.data);
  }

  ngOnDestroy(){
    this.productGetDataSub.unsubscribe();
    this.eventTypesGetDataSub.unsubscribe();
    this.customerGetDataSub.unsubscribe();
  }

  ngOnChanges() {
    //this.calculateFinalPrice();
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
    this.finalPrice = this.totalPrice - this.newQuotation.value.valorDesconto + this.newQuotation.value.taxaDeslocamento;
  }

  handleSubmit() {
    this.quotationService.create(this.selectedProducts, { ...this.newQuotation.value, valorFinal: this.finalPrice }).subscribe(result => {
      console.log(result);
      if (result.data) {
        this.router.navigate([`quotation/${result.data.id}`]);
      }
    });
  }

}
