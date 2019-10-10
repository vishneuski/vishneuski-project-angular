import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import {Product} from "../model/product";
import {Observable, of} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import { map, catchError, tap } from 'rxjs/operators';
import { Product, Item } from '../models/product.interface';
import {Subject} from "rxjs/internal/Subject";



@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  cartProducts: Product[] = [];

  private cartSubject = new BehaviorSubject<CartState>([]);
  CartState = this.cartSubject.asObservable();

    addProduct(product: Product) {
      console.log('in service');
      this.cartProducts.push(product);
      console.log('CartProducts - ', this.cartProducts);
      this.cartSubject.next(<CartState>{products: this.cartProducts});
    }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

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
