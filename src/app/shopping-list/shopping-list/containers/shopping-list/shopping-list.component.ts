import {Component, OnDestroy, OnInit} from '@angular/core';

import {Product} from "../../../../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";

import {AuthService} from "../../../../auth/services/auth.service";
import {ProductsService} from "../../../../products/services/products.service";
import {OrderService} from "../../../services/order.service";

import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-basket-component',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public basketIsEmpty: boolean = false;
  public loggedInUser: any;
  public products: Product[];
  private subscription: Subscription;

  public orderPr = {
    email: '',
    order: {
      id: '',
      email: '',
      name: '',
      price: 0,
      country: '',
      vintage: 0,
      quantity: 0,
      photo: ''
    }
  };

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private productsService: ProductsService,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      this.products !== undefined ? console.log(this.products) : this.basketIsEmpty = true;

    });

    this.authService.getAuth().subscribe(
      user => this.loggedInUser = user);
  }

  orderProduct(product: Product) {
    console.log(product);
    this.orderPr = {
      email: this.loggedInUser.email,
      order: {
        id: product.id,
        email: product.email,
        name: product.name,
        price: product.price,
        country: product.country,
        vintage: product.vintage,
        quantity: product.quantity,
        photo: product.photo
      }
    };
    this.deleteFromBasket(product);
    this.orderService.addOrder(this.orderPr);
    this.productsService.deleteWine(product);
    this.flashMessage.show(`Product ${product.name} was ordered`, {
      cssClass: 'flashMessClass', timeout: 3000
    });
  };

  deleteFromBasket(product) {
    this.productsService.deleteProduct(product);
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
