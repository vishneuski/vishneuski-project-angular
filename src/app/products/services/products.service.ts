import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

import {Product} from '../models/product.interface';
import {Order} from "../../models/order";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {map} from "rxjs/operators";



@Injectable()
export class ProductsService {

  fbProductsCollection: AngularFirestoreCollection<Product>;
  fbProductDoc: AngularFirestoreDocument<Product>;
  fbOrdersCollection: AngularFirestoreCollection<Product>;
  fbOrderDoc: AngularFirestoreDocument<Product>;

  fbProducts: Observable<Product[]>;
  fbProduct: Observable<Product>;

  fbOrders: Observable<Order[]>;
  fbOrder: Observable<Order>;

  constructor(
    private afs: AngularFirestore,
    // private http: HttpClient
  ) {
    this.fbProductsCollection = this.afs.collection('products', ref => ref.orderBy('name', 'asc'));
    this.fbOrdersCollection = this.afs.collection('orders', ref => ref.orderBy('email','asc'))
  }

  getfbProducts(): Observable<Product[]> {
    this.fbProducts = this.fbProductsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          console.log(data, ' products data in FireBase');
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.fbProducts;
  }

  getfbOrders(): Observable<Order[]> {
    this.fbOrders = this.fbOrdersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Order;
          console.log(data, ' orders data in FireBase');
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.fbOrders;
  }


  //Refactor


  cartProducts: Product[] = [];
  //
  private cartSubject = new BehaviorSubject<any>([]);
  CartState = this.cartSubject.asObservable();
  //
  addProduct(product: Product) {
    let tempProduct = this.cartProducts.find(item => item.id === product.id);
    if (tempProduct === undefined) {

      this.cartProducts.push(product);
    }
    console.log('in service');
    console.log('CartProducts - ', this.cartProducts);
    this.cartSubject.next(<any>{products: this.cartProducts});
  }

  // filterForPrice(value) {
  //   console.log('in service', value);
  // }
  //

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
  //
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>('/api/products');
  // }
}
