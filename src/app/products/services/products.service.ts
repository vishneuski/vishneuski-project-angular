import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

import {Product} from '../models/product.interface';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";


@Injectable()
export class ProductsService {

  fbProductsCollection: AngularFirestoreCollection<Product>;
  fbProductDoc: AngularFirestoreDocument<Product>;
  fbProducts: Observable<Product[]>;
  fbProduct: Observable<Product>;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
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

  getfbProduct(id: string): Observable<Product> {
    this.fbProductDoc = this.afs.doc<Product>(`products/${id}`);
    this.fbProduct = this.fbProductDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Product;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.fbProduct;
  }

  cartProducts: Product[] = [];

  private cartSubject = new BehaviorSubject<any>([]);
  CartState = this.cartSubject.asObservable();

  addProduct(product: Product) {
    let tempProduct = this.cartProducts.find(item => item.id === product.id);
    if (tempProduct === undefined) {

      this.cartProducts.push(product);
    }
    console.log('CartProducts - ', this.cartProducts);
    this.cartSubject.next(<any>{products: this.cartProducts});
  }

  deleteProduct(product: Product) {
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

  addWine(wine: Product) {
    this.fbProductsCollection.add(wine);
    this.router.navigate(['/account/listWine']);
  }

  editWine(product: Product) {
    this.fbProductDoc = this.afs.doc(`products/${product.id}`);
    this.fbProductDoc.update(product);
  }

  deleteWine(product: Product) {
    this.fbProductDoc = this.afs.doc(`products/${product.id}`);
    this.fbProductDoc.delete();

  }
}
