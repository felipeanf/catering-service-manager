import { Component, Input, OnInit } from '@angular/core';
import { IProdutos } from 'src/app/InterfacesBanco/produtos';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  @Input() product: IProdutos;
  @Input() quantity: number;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
