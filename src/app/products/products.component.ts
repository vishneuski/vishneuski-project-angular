import {Component, OnInit} from '@angular/core';
import { ProductCartService } from "../shared/product-cart/product-cart.service";
import { Product } from "../model/product";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor( private productCartService: ProductCartService) { }

  ngOnInit() {
    this.products = this.productCartService.getProductsList();
  }

}
