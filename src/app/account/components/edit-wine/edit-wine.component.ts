import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../products/models/product.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsService} from "../../../products/services/products.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {

  editWineForm: FormGroup;
  isLoggedIn: boolean;
  loggedInUser: string;

  id: string;
  product: Product = {
    email: '',
    name: '',
    price: 0,
    country: '',
    vintage: 0,
    quantity: 0,
    photo: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService,
    // private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params.id;

    this.productService.getfbProduct(this.id).subscribe(product => this.product = product);

    // this.authService.getAuth().subscribe(auth => {
    //     if (auth) {
    //       this.isLoggedIn = true;
    //       this.loggedInUser = auth.email;
    //     } else {
    //       this.isLoggedIn = false;
    //     }
    //   }
    // );

    this.editWineForm = new FormGroup(
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

    console.log(this.id, ' - id in edit wine');
  }

  // onSubmit({wine} : {wine:Product}): void {
  //   console.log(wine);
  // }

  onSubmit({value, valid}: { value: Product, valid: boolean }) {
    if (!valid) {
      console.log('Not valid!')
    } else {
      console.log(value);
      value.id = this.id;
      this.productService.editWine(value);
      this.router.navigate(['/account/' + this.id])
    }
  }
}
