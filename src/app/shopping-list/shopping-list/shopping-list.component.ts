import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../products/services/products.service";
import {Product} from "../../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";
import {AuthService} from "../../auth/services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-basket-component',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public productQuantity;
  public loggedInUser: string;
  public products: Product[];
  private subscription: Subscription;

  public orderProducts: Product[];

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
    private authService: AuthService,
    private productsService: ProductsService,
    private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      this.products !== undefined ? console.log(this.products) : 'no products in basket';
    });

    this.authService.getAuth().subscribe(
      user => this.loggedInUser = user);
  }

  order(product: Product) {
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
    console.log(product);
    this.delete(product);
    this.productsService.addOrder(this.orderPr);
    this.productsService.deleteWine(product);
    this.flashMessage.show(`Product ${product.name} was ordered`, {
      cssClass: 'alert-success', timeout: 3000
    });
    // product = this.products;
    // this.productsService.orderProduct(product);
    // this.productsService.orderProduct(product, productQuantity);
    // console.log(`Product ID - ${product.id}`);
    // console.log(`Product quantity - ${productQuantity}`);
    // console.log('in shopping-list - ', this.products);

  };



  delete(product) {
    this.productsService.deleteProduct(product);
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
