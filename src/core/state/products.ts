import { Product } from '../models/product';
import { GlobalState } from '../models/global-state';
import * as productActions from '../actions/products';

export interface ProductState {
  products: Product[];
}

export const getInitialState = (): ProductState => ({
  products: [],
});

export function productsReducer(state = getInitialState(), action: productActions.All): ProductState {
  switch (action.type) {
    case productActions.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}

export function getProducts(state: GlobalState) {
  return state.products && state.products.products;
}
