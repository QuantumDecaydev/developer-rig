import { connect } from 'react-redux';
import { getUserSession } from '../core/state/session';
import { getProducts } from '../core/state/products';
import { ProductTableComponent } from './component';
import * as ProductActions from '../core/actions/products';

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    token: (getUserSession(state) || {}).authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (products) => dispatch(ProductActions.loadProducts(products)),
    addProduct: () => dispatch(ProductActions.addProduct()),
    saveProducts: products => dispatch(ProductActions.saveProducts(products)),
    changeProductValue: (index, fieldName, value) => dispatch(ProductActions.changeProductValue(index, fieldName, value)),
  };
}

export const ProductTable = connect(mapStateToProps, mapDispatchToProps)(ProductTableComponent);
