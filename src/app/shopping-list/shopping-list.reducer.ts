import {Product} from '../products/models/product.interface';
import {Action} from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';
import {filter} from 'rxjs/operators';


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

    case ShoppingListActions.ProductActions.DELETE_PRODUCT:

      const oldCartProducts = [...state.cartProducts];

      console.log(oldCartProducts, ` Old State`);

      const newCartProduct = oldCartProducts.filter(product =>
        product.id !== action.payload.id
        // console.log(product.id, ' product ID');
        // console.log(action.payload.id, ' action.payload ID');
      );
      console.log(newCartProduct, ` new State`);
      return {
        cartProducts: [...newCartProduct]
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
