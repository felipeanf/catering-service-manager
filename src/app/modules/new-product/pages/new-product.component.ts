import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Subscription } from 'rxjs';
import { MeasurementUnitService } from 'src/app/shared/services/measurement-unit.service';

@Component({
  selector: 'app-new-product',
  templateUrl: 'new-product.component.html',
  styleUrls: ['new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {
  public cadastroProduto = this.formBuilder.group({
    nome: [null, Validators.required],
    categoria: [null, Validators.required],
    unidadeMedida: [null, Validators.required],
    precoProdutoUnitario: [null, Validators.required],
    quantidadeEstoque: [null, Validators.required]
  });;
  public categories = [
    { categoriaProduto: null }
  ];
  public measurementUnitOptions = [
    { unidadeMedida: null }
  ];
  public saved = false;

  private productsGetCategoriesSub: Subscription;
  private productsCreateSub: Subscription;
  private measurementeGetAllSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private measurementUnitService: MeasurementUnitService,
  ) { }
 
  ngOnInit(): void {
    this.productsGetCategoriesSub = this.productsService.getCategories().subscribe(result => {
      if (result.data) {
        this.categories = result.data;
      }
    });

    this.measurementeGetAllSub = this.measurementUnitService.getAll().subscribe(result => {
      if (result.data) {
        this.measurementUnitOptions = result.data;
      }
    })
  }

  postData() {
    this.productsCreateSub = this.productsService.create(this.cadastroProduto.value).subscribe(result => {
      console.log(result);
      if (result.data) {
        this.cadastroProduto.reset();
        this.saved = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.productsGetCategoriesSub) {
      this.productsGetCategoriesSub.unsubscribe();
    }
    if (this.measurementeGetAllSub) {
      this.measurementeGetAllSub.unsubscribe();
    }
    if (this.productsCreateSub) {
      this.productsCreateSub.unsubscribe();
    }
  }

}
