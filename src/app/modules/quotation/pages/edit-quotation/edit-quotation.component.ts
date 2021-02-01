import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IExibirOrcamento } from 'src/app/interfacesBanco/exibir-orcamento.interface';
import { IOrcamentos } from 'src/app/interfacesBanco/orcamentos';
import { QuotationService } from '../../services/quotation.service';

@Component({
  selector: 'app-edit-quotation',
  templateUrl: './edit-quotation.component.html',
  styleUrls: ['./edit-quotation.component.css']
})
export class EditQuotationComponent implements OnInit, OnDestroy {

  id: string | null;
  quotationGetDataSub: Subscription;
  quotations: IExibirOrcamento[] = [];

  constructor(
    private route: ActivatedRoute,
    private quotationService: QuotationService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quotationGetDataSub = this.quotationService.getQuotationById(this.id).subscribe(data => {
      this.quotations = data.data;
      console.log(data);    
    });
  } 

  ngOnDestroy(){
    this.quotationGetDataSub.unsubscribe();
  }

}
