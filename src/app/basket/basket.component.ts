import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService } from "../products/services/products.service";
import {Product} from "../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-basket-component',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {

  products: Product[];
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      console.log('in basket');
      console.log(this.products);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
