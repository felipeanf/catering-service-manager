import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsDataSource } from '../../products-datasource';
import { ProductsService } from '../../../../shared/services/products.service';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';


@Component({
  selector: 'Produtos',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IProdutos>;
  dataSource!: ProductsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id","nome","categoria", "unidadeMedida", "precoProdutoUnitario", "quantidadeEstoque"];

  public products:IProdutos[] = [];

  constructor(private _dataService: ProductsService){ }


  getProducts(){
    return this.products;
  }
  
  ngOnInit() {


    this._dataService.getProductsData()
      .subscribe(data => this.products = data);


    this.dataSource = new ProductsDataSource(this._dataService);

    console.log(this.dataSource);
    }
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}




