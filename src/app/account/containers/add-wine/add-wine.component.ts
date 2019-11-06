import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../products/services/products.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {Product} from "../../../products/models/product.interface";

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {


  isLoggedIn: boolean;
  loggedInUser: string;


  constructor(
    private productService: ProductsService,
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
  }

  addWine(wine) {
    this.productService.addWine(wine);
    this.router.navigate(['/account'])
  }
}
