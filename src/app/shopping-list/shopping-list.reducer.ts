import {Product} from '../products/models/product.interface';
import {Action} from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
  cartProducts: []
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ProductsActions) {
  switch (action.type) {
    case ShoppingListActions.ProductActions.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      };
    case ShoppingListActions.ProductActions.GET_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts]
      };
      default:
      return state;
  }
}
