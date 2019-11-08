import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.interface";
import {Observable} from "rxjs/internal/Observable";
import {take} from "rxjs/operators";
import {promise} from "selenium-webdriver";
import Promise = promise.Promise;

@Injectable()
export class ProductsResolve implements Resolve<Product[]> {

  constructor(private productService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productService.getfbProducts().pipe(take(1));
  }
}
