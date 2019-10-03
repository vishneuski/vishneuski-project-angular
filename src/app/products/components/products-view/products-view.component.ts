import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  searchItem: string;
  buyProductList: Product[] = [];

  @Input()
  products: Product[];

  @Input()
  filteredProducts: Product[];

  @Output()
  purchase: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  buyProduct(product: Product) {
    this.buyProductList.push(product);
    console.log(this.buyProductList);
    this.purchase.emit(product);
  }

  filterProduct(producer: string) {
    this.filter.emit(this.searchItem);
  }
}
