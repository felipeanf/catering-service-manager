import { Component, Input, OnInit } from '@angular/core';
import { IItemProduto } from '../../models/item.interface';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  @Input() item: IItemProduto;
  constructor() { }

  ngOnInit(): void {
  }

}
