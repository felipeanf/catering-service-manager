import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  cadastroCliente: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder){
    this.cadastroCliente = formBuilder.group({
    nome: new FormControl(),
    cpf: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    endereco: new FormControl()
  });
}
 
  ngOnInit(): void {
  }

  postData(){
    console.log(this.cadastroCliente);
    console.log(this.cadastroCliente.value)
  }

}
