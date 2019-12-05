import {Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../../products/models/product.interface';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent {

  @ContentChild('noProducts', {static: false})
  divNoProd: ElementRef;

  constructor(
    private flashMessage: FlashMessagesService
  ) {
  }

  @Input()
  cartProducts: Product[];

  @Input()
  products: Product[];

  @Output()
  deleteFromBasket: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  deleteThisWine: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  orderProduct: EventEmitter<Product> = new EventEmitter<Product>();

  delete(product: Product) {
    this.flashMessage.show(`${product.name} was deleted from shopping list! `, {
      cssClass: 'alert-success', timeout: 3000
    });
    this.deleteFromBasket.emit(product);
  }

  deleteThis(product: Product) {
    console.log(product);
    this.deleteThisWine.emit(product);
  }

  order(product: Product) {
    this.orderProduct.emit(product);
  }
}
