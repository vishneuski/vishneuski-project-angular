import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Product} from "../../../products/models/product.interface";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.component.html',
  styleUrls: ['./list-wine.component.css']
})
export class ListWineComponent implements OnInit {
  products?: Product[];
  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(
    private productService: ProductsService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      }
    );

    this.productService.getfbProducts().subscribe
    (products =>
      this.products = products)
  }

  filter(val): boolean {
    if (val !== this.loggedInUser.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
