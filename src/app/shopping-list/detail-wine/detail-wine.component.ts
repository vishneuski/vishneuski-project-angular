import {Component, OnInit} from '@angular/core';
import {Product} from "../../products/models/product.interface";
import {ProductsService} from "../../products/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-wine',
  templateUrl: './detail-wine.component.html',
  styleUrls: ['./detail-wine.component.css']
})
export class DetailWineComponent implements OnInit {
  id: string;
  product: Product;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productsService.getfbProduct(this.id).subscribe(product => {
      this.product = product;
      console.log(this.product, '  -detail-wine component');
    });
  }
}
