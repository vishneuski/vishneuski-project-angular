import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../../auth/services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

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
          product.name.toLowerCase().indexOf(searchString) !== -1);
      console.log(this.filteredProducts);
      return this.filteredProducts;
    }
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private productsService: ProductsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.fbProducts = this.activatedRoute.snapshot.data['resolvedProducts'];
    this.filteredProducts = this.fbProducts;

    this.authService.getAuth().subscribe(
      val => {
        this.isLoggedIn = val;
      }
    )
  }

  addToBasket(product: Product) {
    this.productsService.addProduct(product);

  }
}
