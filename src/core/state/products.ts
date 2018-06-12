import { Product, ValidationErrors } from '../models/product';
import { GlobalState } from '../models/global-state';
import * as productActions from '../actions/products';
import * as ProductErrors from '../../constants/product-errors';

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

    case productActions.ADD_PRODUCT:
      const products_ADD = [...state['products']];
      products_ADD.push({
        displayName: 'New Product',
        sku: 'newSKU',
        amount: 1,
        inDevelopment: 'true',
        broadcast: 'true',
        deprecated: false,
        dirty: true
      });
      return {
        ...state,
        products: products_ADD
      };

    case productActions.CHANGE_PRODUCT:
      const products_CHANGE = updateProduct(
        state,
        action.index,
        { [action.fieldName]: action.value }
      );
      return {
        ...state,
        products: products_CHANGE
      };
      
    default:
      return state;
  }
}

export function getProducts(state: GlobalState) {
  return state.products && state.products.products;
}

function updateProduct(state: ProductState, index: number, partial: object): Product[] {
  return state.products.map((product, idx) => {
    if (idx === index) {
      let newProduct = {
        ...product,
        ...partial
      };
      newProduct.validationErrors = validateProduct(newProduct);
      return newProduct;
    }
    return product;
  });
}

function validateProduct(product: Product): ValidationErrors {
  let validationErrors: ValidationErrors = {};

  if (!product.displayName) {
    validationErrors.displayName = ProductErrors.NAME_EMPTY;
  } else if (product.displayName.length > 255) {
    validationErrors.displayName = ProductErrors.NAME_CHAR_LIMIT;
  }

  if (!product.sku) {
    validationErrors.sku = ProductErrors.SKU_EMPTY;
  } else if (product.sku.search(/^\S*$/)) {
    validationErrors.sku = ProductErrors.SKU_WHITESPACE;
  } else if (product.sku.length > 255) {
    validationErrors.sku = ProductErrors.SKU_CHAR_LIMIT;
  }

  if (!product.amount) {
    validationErrors.amount = ProductErrors.AMOUNT_EMPTY;
  } else if (product.amount < 1 || product.amount > 10000) {
    validationErrors.amount = ProductErrors.AMOUNT_OUT_OF_RANGE;
  }

  return validationErrors;
}
