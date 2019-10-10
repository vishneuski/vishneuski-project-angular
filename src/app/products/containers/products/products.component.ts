import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"
import {Subscription} from "rxjs/internal/Subscription";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  products: Product[];
  productMap: Map<number, Product>;


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

  addToBasket(product: Product) {
    console.log('in products');
    this.productsService.addProduct(product);
  }

  // this.filteredProducts = this.products;

  // productFilter(producer: string): void{
  //   console.log(`Smart producer - ${producer}`);
  //   this.searchString = producer;
  // }
}
