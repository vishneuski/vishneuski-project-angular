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

  productQuantity;
  products: Product[];
  private subscription: Subscription;

  orderProducts: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
    })
  }

  order(product: Product, productQuantity) {
    this.productsService.orderProduct(product, productQuantity);
    // console.log(`Product ID - ${product.id}`);
    // console.log(`Product quantity - ${productQuantity}`);
    // console.log('in basket - ', this.products);

  };

  delete(product) {
    this.productsService.deleteProduct(product)
  };


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
