import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Product} from '../models/product.interface';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {map} from "rxjs/operators";



@Injectable()
export class ProductsService {

  fbProductsCollection: AngularFirestoreCollection<Product>;
  fbProductDoc: AngularFirestoreDocument<Product>;
  fbProducts: Observable<Product[]>;
  fbProduct: Observable<Product>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.fbProductsCollection = this.afs.collection('products', ref => ref.orderBy('name', 'asc'));
  }

  getfbProducts(): Observable<Product[]> {
    this.fbProducts = this.fbProductsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.fbProducts;
  }

  cartProducts: Product[] = [];

  private cartSubject = new BehaviorSubject<any>([]);
  CartState = this.cartSubject.asObservable();

  addProduct(product: Product) {
    let tempProduct = this.cartProducts.find(item => item.id === product.id);
    if (tempProduct === undefined) {

      this.cartProducts.push(product);
    }
    console.log('in service');
    console.log('CartProducts - ', this.cartProducts);
    this.cartSubject.next(<any>{products: this.cartProducts});
  }

  filterForPrice(value) {
    console.log('in service', value);
  }

  deleteProduct(product: Product) {
    console.log(product.name);
    console.log(this.cartProducts);
    let tempProduct = this.cartProducts.find(item => item.id === product.id);

    if (tempProduct !== undefined) {
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (this.cartProducts[i].id === product.id) {
          this.cartProducts.splice(i, 1);
        }
      }
    }
    this.cartSubject.next(<any>{products: this.cartProducts});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
