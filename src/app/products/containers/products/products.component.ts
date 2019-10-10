import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent{

  products: Product[];
  filteredProducts: Product[];
  productMap: Map<number, Product>;

  filterProducts(searchString: string) {
    console.log('Filter Work!', searchString);
    this.filteredProducts = this.products
      .filter((product) =>
        product.name.indexOf(searchString) !== -1);
    console.log(this.filteredProducts);
    return this.filteredProducts;
  }

  updateProducts(searchString: string) {
    searchString ='';
    this.filteredProducts = this.products
      .filter((product) =>
        product.name.indexOf(searchString) !== -1);
  }

  constructor(
    private productsService: ProductsService) {
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
}
