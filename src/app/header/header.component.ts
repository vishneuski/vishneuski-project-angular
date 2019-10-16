import { Component, OnInit } from '@angular/core';
import {Product} from "../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductsService} from "../products/services/products.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: Product[];
  productQuantity: number;
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      // console.log(this.products?.length);
      if (this.products !== undefined) {
        this.productQuantity = this.products.length;
      }
    })
  }



}
