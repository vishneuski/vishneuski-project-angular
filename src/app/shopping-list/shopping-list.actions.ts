import {Action} from '@ngrx/store';
import {Product} from '../products/models/product.interface';

export enum ProductActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
}

export class GetProducts implements Action {

  readonly type = ProductActions.GET_PRODUCTS;
}

export class AddProduct implements Action {

  readonly type = ProductActions.ADD_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class DeleteProduct implements Action {

  readonly type = ProductActions.DELETE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export type ProductsActions = GetProducts | AddProduct | DeleteProduct;
