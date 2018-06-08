import { connect } from 'react-redux';
import { getUserSession } from '../core/state/session';
import { getProducts } from '../core/state/products';
import { ProductTableComponent } from './component';

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    token: getUserSession(state).authToken,
  };
}

export const ProductTable = connect(mapStateToProps)(ProductTableComponent);
