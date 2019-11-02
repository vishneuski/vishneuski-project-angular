import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../products/services/products.service";
import {Product} from "../../products/models/product.interface";

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.component.html',
  styleUrls: ['./list-wine.component.css']
})
export class ListWineComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductsService
  ) {
  }

  ngOnInit() {
    this.productService.getfbProductsOfEmail()
      .subscribe(
        products => {
          this.products = products;
        }
      );
  }
}
