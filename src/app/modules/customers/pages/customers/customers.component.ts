import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CustomersDataSource } from '../../customers-datasource';
import { IProdutos } from '../../../../InterfacesBanco/produtos';
import { DataService } from '../../data.service';
import { IClientes } from 'src/app/InterfacesBanco/clientes';
//const axios = require('axios').default;


@Component({
  selector: 'Customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IClientes>;
  dataSource!: CustomersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id","nome","categoria", "unidadeMedida", "precoProdutoUnitario", "quantidadeEstoque"];

  public customers:IClientes[] = [];

  constructor(private _dataService: DataService){ }


  getProducts(){
    return this.customers;
  }
  
  ngOnInit() {


    this._dataService.getCustomersData()
      .subscribe(data => this.customers = data);


    this.dataSource = new CustomersDataSource(this._dataService);


    console.log(this.dataSource)
    }
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}




