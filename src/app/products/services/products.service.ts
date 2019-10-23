import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Product} from '../models/product.interface';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
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
