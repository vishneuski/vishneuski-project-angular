import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../products/services/products.service";
import {Product} from "../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-basket-component',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {

  productQuantity = 1;
  products: Product[];
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      console.log(`In basket - ${this.products}`);
    })
  }

  order(product, quantity) {
    console.log(`Product - ${product}`);
    console.log(`Product quantity - ${quantity}`);
  }

  delete(product) {
    console.log(product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
