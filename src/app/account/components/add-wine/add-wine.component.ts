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

  addWineForm: FormGroup;
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

    this.addWineForm = new FormGroup(
      {
        'email': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
        'vintage': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required),
        'photo': new FormControl(null, Validators.required),
      }
    );
  }

  onSubmit(wine): void {
    this.productService.addWine(wine.value);
    this.router.navigate(['/account'])
  }
}
