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
  filteredProducts: Product[];
  productMap: Map<number, Product>;
  request: Subscription;

  message: string;
  searchString: string;

  private _searchTerm: string;

  set searchTerm(item: string) {
    this._searchTerm = item;
    console.log(item);
    this.filteredProducts = this.filterProducts(item);
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  filterProducts(searchString: string) {
    console.log('Filter Work!', searchString);
    return this.products
      .filter((product) =>
        product.name.indexOf(searchString) !== 1);
  }

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
        this.filteredProducts = this.products;

      }
    );
  }

  addToBasket(product: Product) {
    console.log('in products');
    this.productsService.addProduct(product);
  }

  productFilter(name: string): void{
    console.log(`Smart producer - ${name}`);
    this.searchString = name;
  }
}
