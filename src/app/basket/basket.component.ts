import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products/services/products.service";

@Component({
  selector: 'app-basket-component',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private productService = ProductsService) {
    
  }

  ngOnInit() {
  }

}
