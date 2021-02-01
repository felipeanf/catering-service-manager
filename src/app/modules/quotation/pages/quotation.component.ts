import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { IOrcamentos } from 'src/app/interfacesBanco/orcamentos';
import { QuotationService } from '../services/quotation.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit, OnDestroy {

  quotationGetDataSub: Subscription;
  quotations: IOrcamentos[];

  constructor(private quotationService: QuotationService) { }

  ngOnInit(): void {
    this.quotationGetDataSub = this.quotationService.getQuotations().subscribe(data => this.quotations = data.data);
  }

  ngOnDestroy(){
    this.quotationGetDataSub.unsubscribe();
  }

}
