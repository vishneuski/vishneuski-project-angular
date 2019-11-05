import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../products/services/products.service";
import {Product} from "../../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-basket-component',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public productQuantity;
  public products: Product[];
  private subscription: Subscription;

  public orderProducts: Product[];

  constructor(
    private productsService: ProductsService,
    private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
    });
  }

  order(product: Product) {
    // product = this.products;
    this.productsService.orderProduct(product);
    // this.productsService.orderProduct(product, productQuantity);

    // console.log(`Product ID - ${product.id}`);
    // console.log(`Product quantity - ${productQuantity}`);
    // console.log('in shopping-list - ', this.products);

  };

  delete(product) {
    this.productsService.deleteProduct(product);
    this.flashMessage.show(`Product ${product.name} deleted`, {
      cssClass: 'alert-success', timeout: 4000
    });
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
