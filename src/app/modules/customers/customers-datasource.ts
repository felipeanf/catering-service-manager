import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomersComponent } from './pages/customers/customers.component';
import { DataService } from './data.service';
import { IClientes } from 'src/app/InterfacesBanco/clientes';



/**
 * Data source for the Products view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomersDataSource extends DataSource<IClientes> {


  public data: IClientes[] = [];

  columns = ["ID","Nome","Categoria", "Unidade de Medida", "Preco Unitario", "Quantidade em Estoque"];
  index = ["id","nome","categoria", "unidadeMedida", "precoProdutoUnitario", "quantidadeEstoque"];
  paginator!: MatPaginator;
  sort!: MatSort;



  constructor(private produtos:DataService) {
    super();
    this.produtos.getCustomersData().subscribe(httpData=> {
      this.data = httpData.data
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */


 


  connect(): Observable<IClientes[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.



    const dataMutations = [
      observableOf(this.data),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IClientes[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IClientes[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'categoria': return compare(+a.id, +b.id, isAsc);
        case 'unidadeMedida': return compare(+a.id, +b.id, isAsc);
        case 'precoProdutoUnitario': return compare(+a.id, +b.id, isAsc);
        case 'quantidadeEstoque': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
