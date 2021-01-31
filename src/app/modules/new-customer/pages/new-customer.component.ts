import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService} from 'src/app/shared/services/costumer.service';
import { Subscription } from 'rxjs';
import { MeasurementUnitService } from 'src/app/shared/services/measurement-unit.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit, OnDestroy {
  public cadastroCliente = this.formBuilder.group({
    nome: [null, Validators.required],
    cpf: [null, Validators.required],
    telefone: [null, Validators.required],
    email: [null, Validators.required],
    endereco: [null, Validators.required]
  });;
  public saved = false;
  private customerCreateSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) { }
  
  ngOnInit(): void {
   }

  postData() {
    this.customerCreateSub = this.customerService.create(this.cadastroCliente.value).subscribe(result => {
      console.log(result);
      if (result.data) {
        this.cadastroCliente.reset();
        this.saved = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.customerCreateSub) {
      this.customerCreateSub.unsubscribe();
    }
  }

}
