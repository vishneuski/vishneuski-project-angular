import {Action} from '@ngrx/store';
import {Product} from '../products/models/product.interface';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export class AddProduct implements Action {

  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}
}
