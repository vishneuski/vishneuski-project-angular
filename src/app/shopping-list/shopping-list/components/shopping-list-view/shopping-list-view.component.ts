import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../products/models/product.interface";

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent implements OnInit {
  // public productQuantity;


  @Input()
  products: Product[];

  @Output()
  deleteFromBasket: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  orderProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  delete(product: Product) {
    this.deleteFromBasket.emit(product);
  }

  order(product: Product) {
    this.orderProduct.emit(product);
  }

}
