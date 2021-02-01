import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrcamentos } from 'src/app/interfacesBanco/orcamentos';
import { IItemProduto } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  url:string = 'http://localhost:8000/quotation';
  constructor(private http: HttpClient) { }

  getQuotations(): Observable<any>{
    return this.http.get(this.url);
  }

  create(selectedProducts: IItemProduto[], quotation: IOrcamentos): Observable<any> {
    const items = this.getItemsArray(selectedProducts);
    return this.http.post('http://localhost:8000/quotation', { 
      quotation: quotation,
      products: items
    });
  }

  private getItemsArray(item: IItemProduto[]){
    const items = item.map(element => ({
      idProduto: element.product?.id,
      quantidade: element.quantity,
      precoProdutoOrcado: (element.price * element.quantity),
    }));
    return items;
  }
}
