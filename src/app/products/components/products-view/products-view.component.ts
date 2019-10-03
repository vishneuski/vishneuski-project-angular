import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  buyProductList: any[] = [];

  @Input()
  products: Product[];

  @Output()


  constructor() { }

  ngOnInit() {
  }

  buyProduct(product: Product) {
    this.buyProductList.push(product);
    console.log(this.buyProductList);
  }

}
