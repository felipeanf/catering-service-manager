import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrcamentos } from 'src/app/InterfacesBanco/orcamentos';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';
import { IItemProduto } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private http: HttpClient) { }

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
