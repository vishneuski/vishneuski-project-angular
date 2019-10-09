import {Component, OnInit} from '@angular/core';
// import {Product} from "../../model/product";
import {Product, Item} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"
import {Subscription} from "rxjs/internal/Subscription";
import {Observable, of, forkJoin} from "rxjs";
import {tap, map} from "rxjs/operators";
import {products} from "../../../fake-back-end/data/products";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]

})
export class ProductsComponent implements OnInit {

  products: Product[];
  productMap: Map<number, Product>;
  

  request: Subscription;
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
    console.log(product)
    // this.request = this.productsService
    //   .purchaseProduct(product.id)
    //   .subscribe((value) => {
    //     if (value) {
    //       this.router.navigate(['basket']);
    //       console.log('Product add to the basket!');
    //     }
    //   });
    // console.log('Smart - ',product.id);
  }

  // productFilter(producer: string): void{
  //   console.log(`Smart producer - ${producer}`);
  //   this.searchString = producer;
  // }
}
