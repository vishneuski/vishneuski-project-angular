import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product.interface";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

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
    this.purchase.emit(product);
  }

  filterProduct(searchItem: string) {
    this.filter.emit(searchItem);
  }
}
