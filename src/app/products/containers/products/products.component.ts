import {Component, OnInit} from '@angular/core';
import { ProductCartService } from "../../../shared/product-cart/product-cart.service";
import { Product } from "../../model/product";
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productCartService: ProductCartService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();

  }
}
