import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../products/models/product.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {

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
  // @Input()
  // product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productService.getfbProduct(this.id).subscribe(product => console.log(product));
  }
}
