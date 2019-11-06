import {Component, OnInit} from '@angular/core';
import {Product} from "../../../products/models/product.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {

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
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params.id;

    this.productService.getfbProduct(this.id).subscribe(product => this.product = product);
  }

  editWine({value, valid}: { value: Product, valid: boolean }) {
    if (!valid) {
      console.log('Not valid!')
    } else {
      value.id = this.id;
      this.productService.editWine(value);
      this.router.navigate(['/account/' + this.id])
    }
  }
}
