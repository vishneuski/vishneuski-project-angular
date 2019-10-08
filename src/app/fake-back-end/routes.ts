import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { cart } from './data/cart';
import { products } from './data/products';

import { Product, Item } from '../products/models/product.interface';

export function getCart() {
  return ok<Item[]>(cart);
}

export function getProducts() {
  return ok<Product[]>(products);
}
