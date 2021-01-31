import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: 'new-product.component.html',
  styleUrls: ['new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public cadastroProduto = this.formBuilder.group({
    nomeProduto: new FormControl(),
    categoriaProduto: new FormControl(),
    unidadeMedida: new FormControl(),
    precoProduto: new FormControl(),
    estoqueProduto: new FormControl()
  });;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
  }

  postData() {
    console.log(this.cadastroProduto);
    console.log(this.cadastroProduto.value);
  }

}
