import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {Product} from "../../model/product";
import {Product, Item} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"
import {Subscription} from "rxjs/internal/Subscription";
import {Observable, of, forkJoin} from "rxjs";
import {tap, map} from "rxjs/operators";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  products: Product[];
  productMap: Map<number, Product>;
  productsToPurchase: Product[] = [];
  request: Subscription;
  message: string;


  // searchString: string;
  // filteredProducts: Product[] = this.products;

  // private _searchItem: string;
  //
  // set searchItem(item: string) {
  //   this._searchItem = item;
  //   this.filteredProducts = this.filterProducts(item);
  // }
  //
  // get searchItem(): string {
  //   return this._searchItem;
  // }

  // filteredProducts = this.filterProducts(this.searchString);
  //
  // filterProducts(searchString: string) {
  //   console.log('Filter Work!');
  //   return this.products
  //     .filter((product) =>
  //       product.producer.indexOf(searchString) !== 1);
  // }

  constructor(
    private productsService: ProductsService,
    private router: Router) {
  }

  ngOnInit() {
    // this.productsService.currentMessage.subscribe(message => this.message = message);

    const products = this.productsService.getProducts();

    forkJoin(products).subscribe(
      ([products]: [Product[]]) => {
        const myMap = products.map<[number, Product]>(product => [
          product.id,
          product
        ]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;

      }
    );
  }

  // this.filteredProducts = this.products;

  addPurchase(product: Product) {

    let tempProduct = this.productsToPurchase.find(item => item.id === product.id);
    if (tempProduct === undefined) {
      this.productsToPurchase.push(product);
    }
    console.log(this.productsToPurchase);
    return this.productsToPurchase;
  }

  addToBasket(product: Product) {
    console.log('in products');
    this.productsService.addProduct(product);
  }


  // this.request = this.productsService
  //   .purchaseProduct(product.id)
  //   .subscribe((value) => {
  //     if (value) {
  //       this.router.navigate(['basket']);
  //       console.log('Product add to the basket!');
  //     }
  //   });




  // productFilter(producer: string): void{
  //   console.log(`Smart producer - ${producer}`);
  //   this.searchString = producer;
  // }
}


import {products} from "../../../fake-back-end/data/products";
