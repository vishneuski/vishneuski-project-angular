import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]

})
export class ProductsComponent implements OnInit {

  request: Subscription;
  products: Product[];

  constructor(
    private productsService:ProductsService,
    private router: Router) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addPurchase(product: Product) {
    this.request = this.productsService
      .purchaseProduct(product.id)
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['basket']);
          console.log('Product add to the basket!');
        }
      });
    console.log('Smart - ',product.id);
  }
}
