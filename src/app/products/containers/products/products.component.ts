import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.interface';
import {ProductsService} from '../../services/products.service';
import {AuthService} from '../../../auth/services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as ShoppingListActions from './../../../shopping-list/shopping-list.actions';
import {filter, find, map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  cartProducts: Observable<{ cartProducts: Product[] }>;

  testProducts: Observable<{ cartProducts: Product[] }>;

  testProductsContainer: Product[] = [];

  fbProducts: Product[];
  filteredProducts: Product[];
  public isLoggedIn: any;

  filterProducts(searchString?: string) {
    if (searchString === '' || searchString === undefined || searchString === null) {
      return this.filteredProducts = this.fbProducts;
    } else {
      this.filteredProducts = this.fbProducts
        .filter((product) =>
          product.name.toLowerCase().indexOf(searchString) !== -1);
      console.log(this.filteredProducts);
      return this.filteredProducts;
    }
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private productsService: ProductsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ shoppingList: { cartProducts: Product[] } }>
  ) {
  }

  ngOnInit() {

    this.cartProducts = this.store.select('shoppingList');

    this.testProducts = this.store.select('shoppingList');

    this.fbProducts = this.activatedRoute.snapshot.data['resolvedProducts'];
    this.filteredProducts = this.fbProducts;

    this.authService.getAuth().subscribe(
      val => {
        this.isLoggedIn = val;
      }
    );
  }

  addToBasket(product: Product) {
    this.cartProducts.subscribe(
      val => {
        if (val.cartProducts !== null) {
          const tempProduct = val.cartProducts.find(item =>
            item.id === product.id);
          if (tempProduct === undefined) {
            // this.flashMessage.show(`${product.name} added in shopping cart successfully !`, {
            //   cssClass: 'alert-success', timeout: 3000
            // });
            this.store.dispatch(new ShoppingListActions.AddProduct(product));
          } else if (tempProduct !== undefined) {
            this.flashMessage.show(`${product.name} already in your shopping cart !`, {
              cssClass: 'alert-danger', timeout: 3000
            });
          }
        }
      }
    );
  }

// this.productsService.addProduct(product);

  getProductsFromBasket() {
    console.log('Hello from product.comp!');
    // console.log(this.testProducts);
    //   this.store.dispatch(new ShoppingListActions.GetProducts());
    this.testProducts
      .subscribe(val => {
          console.log(val.cartProducts);
          this.testProductsContainer = val.cartProducts;
          console.log(this.testProductsContainer);
        }
      );
  }
}
