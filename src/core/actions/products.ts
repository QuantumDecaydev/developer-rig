import { Action } from '../models/actions';
import { Product } from '../models/product';

export const LOAD_PRODUCTS = 'core.products.LOAD';
export const SAVE_PRODUCTS = 'core.products.SAVE';
export const ADD_PRODUCT = 'core.products.ADD';
export const CHANGE_PRODUCT = 'core.products.CHANGE';

interface LoadProducts extends Action<typeof LOAD_PRODUCTS> {
  products: Product[];
}

interface SaveProducts extends Action<typeof SAVE_PRODUCTS> {
  products: Product[];
}

interface AddProduct extends Action<typeof ADD_PRODUCT> {}

interface ChangeProductValue extends Action<typeof CHANGE_PRODUCT> {
  index: number;
  fieldName: string;
  value: string;
}

export type All = (
  | LoadProducts
  | SaveProducts
  | AddProduct
  | ChangeProductValue
);

export function loadProducts(products: Product[] | null): LoadProducts {
  return {
    type: LOAD_PRODUCTS,
    products: products,
  }
}

export function saveProducts(products: Product[] | null): SaveProducts {
  return {
    type: SAVE_PRODUCTS,
    products: products,
  }
}

export function addProduct(): AddProduct {
  return {
    type: ADD_PRODUCT,
  }
}

export function changeProductValue(index: number, fieldName: string, value: string): ChangeProductValue {
  return {
    type: CHANGE_PRODUCT,
    index: index,
    fieldName: fieldName,
    value: value,
  }
}