import { Component, OnInit } from '@angular/core';
import {Product} from "../../products/models/product.interface";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductsService} from "../../products/services/products.service";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  products: Product[];
  productQuantity = 0;
  private subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private router: Router
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

    this.subscription = this.productsService.CartState.subscribe((state: any) => {
      this.products = state.products;
      if (this.products !== undefined) {
        this.productQuantity = this.products.length;
      }
    })
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
