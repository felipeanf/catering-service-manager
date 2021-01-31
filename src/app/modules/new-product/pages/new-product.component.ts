import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: 'new-product.component.html',
  styleUrls: ['new-product.component.css']
})
export class NewProductComponent implements OnInit {
 
  cadastroProduto: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder){
    this.cadastroProduto = formBuilder.group({
    nomeproduto: new FormControl(),
    categoriaproduto: new FormControl(),
    unidadeMedida: new FormControl(),
    precoproduto: new FormControl(),
    estoqueproduto: new FormControl()
  });
}
 
  ngOnInit(): void {
  }

  postData(){
    console.log(this.cadastroProduto);
    console.log(this.cadastroProduto.value)
  }

}
