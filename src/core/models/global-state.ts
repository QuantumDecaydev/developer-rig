import { SessionState } from '../state/session';
import { ProductState } from '../state/products';

export interface GlobalState{
  session: SessionState;
  products: ProductState;
}
