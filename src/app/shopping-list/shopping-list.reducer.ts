import {Product} from '../products/models/product.interface';
import {Action} from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
  cartProducts: []
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddProduct) {
  switch (action.type) {
    case ShoppingListActions.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      };
    default:
      return state;
  }
}
