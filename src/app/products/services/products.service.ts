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

  // products: Product[] = [
  //   {
  //     id: 1,
  //     producer: 'best',
  //     country: 'France',
  //     vintage: 1970,
  //     type: 'white',
  //     available: 2,
  //     volume: 0.75,
  //     prise: 100,
  //     photo: '../../assets/images/bottle.jpg'
  //   },
  //   {
  //     id: 2,
  //     producer: 'toap',
  //     country: 'Italy',
  //     vintage: 1980,
  //     type: 'red',
  //     available: 3,
  //     volume: 0.75,
  //     prise: 200,
  //     photo: '../../assets/images/bottle.jpg'
  //   },
  //   {
  //     id: 3,
  //     producer: 'ferr',
  //     country: 'Spain',
  //     vintage: 1960,
  //     type: 'white',
  //     available: 1,
  //     volume: 0.75,
  //     prise: 1000,
  //     photo: '../../assets/images/bottle.jpg'
  //   },
  //   {
  //     id: 4,
  //     producer: 'best',
  //     country: 'France',
  //     vintage: 1970,
  //     type: 'white',
  //     available: 2,
  //     volume: 0.75,
  //     prise: 100,
  //     photo: '../../assets/images/bottle.jpg'
  //   },
  //   {
  //     id: 5,
  //     producer: 'best',
  //     country: 'France',
  //     vintage: 1970,
  //     type: 'white',
  //     available: 2,
  //     volume: 0.75,
  //     prise: 100,
  //     photo: '../../assets/images/bottle.jpg'
  //   },
  //   {
  //     id: 6,
  //     producer: 'best',
  //     country: 'France',
  //     vintage: 1970,
  //     type: 'white',
  //     available: 2,
  //     volume: 0.75,
  //     prise: 100,
  //     photo: '../../../assets/images/bottle.jpg'
  //   }
  // ];

  // getProducts(): Product[] {
  //   return this.products;
  // }

  // purchaseProduct(id): Observable<Product> {
  //   let purchaseProduct = this.products
  //     .filter(val => val.id === id);
  //   if (purchaseProduct && purchaseProduct.length === 1) {
  //     return of(purchaseProduct[0]);
  //   } else {
  //     return of(null);
  //   }
  // }


}
