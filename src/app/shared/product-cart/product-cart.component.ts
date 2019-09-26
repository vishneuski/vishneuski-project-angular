import { Component, OnInit } from '@angular/core';
import { ProductCartService } from "./product-cart.service";
import { Product } from "../../model/product";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})


export class ProductCartComponent implements OnInit {

  products: Product[];

  constructor( private productCartService: ProductCartService) { }

  ngOnInit() {
    this.products = this.productCartService.getProductsList();
  }

}
