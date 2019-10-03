import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]

})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();

  }
}
