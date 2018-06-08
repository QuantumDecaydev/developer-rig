import { Action } from '../models/actions';
import { Product } from '../models/product';

export const LOAD_PRODUCTS = 'core.products.LOAD';

interface LoadProducts extends Action<typeof LOAD_PRODUCTS> {
  products: Product[];
}

export type All = (
  | LoadProducts
);

export function loadProducts(products: Product[] | null): LoadProducts {
  return {
    type: LOAD_PRODUCTS,
    products: products,
  }
}
