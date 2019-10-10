import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Product} from '../models/product.interface';


@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  cartProducts: Product[] = [];
  uniqueProductMessage: string =''; // add message if product already in cart

  private cartSubject = new BehaviorSubject<CartState>([]);
  CartState = this.cartSubject.asObservable();

    addProduct(product: Product) {
      let tempProduct = this.cartProducts.find(item => item.id === product.id);
      if (tempProduct === undefined) {

        this.cartProducts.push(product);
      }
      console.log('in service');
      console.log('CartProducts - ', this.cartProducts);
      this.cartSubject.next(<CartState>{products: this.cartProducts});
    }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
