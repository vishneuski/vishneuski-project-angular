import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  fbProducts: Product[];
  filteredProducts: Product[];
  public isLoggedIn: any;

  filterProducts(searchString?: string) {
    if (searchString === '' || searchString === undefined || searchString === null) {
      return this.filteredProducts = this.fbProducts;
    } else {
      this.filteredProducts = this.fbProducts
        .filter((product) =>
          product.name.indexOf(searchString) !== -1);
      console.log(this.filteredProducts);
      return this.filteredProducts;
    }
  }

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.productsService.getfbProducts().subscribe(
      products => {
        this.fbProducts = products;
        this.filteredProducts = this.fbProducts;
      }
    );

    this.authService.getAuth().subscribe(
      val => {
        this.isLoggedIn = val;
      }
    )
  }

  addToBasket(product: Product) {
    this.productsService.addProduct(product);
  }


  //
  // priceFilter(value) {
  //   this.productsService.filterForPrice(value);
  //   console.log('Filter for prise form value', value);
  // }
}
