import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import {Product} from "../model/product";
import {Observable, of} from "rxjs";
import { map, catchError, tap } from 'rxjs/operators';
import { Product, Item } from '../models/product.interface';



@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  // purchaseProduct(id): Observable<Product[]> {
  //
  //   let purchaseProduct = this.products
  //     .filter(val => val.id === id);
  //   if (purchaseProduct && purchaseProduct.length === 1) {
  //     return of(purchaseProduct[0]);
  //   } else {
  //     return of(null);
  //   }
  // }


}
