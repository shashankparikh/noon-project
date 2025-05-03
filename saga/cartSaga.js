import { takeLatest, put, select } from 'redux-saga/effects';
import { UPDATE_PRODUCT_QUANTITY } from '../action/getProductListAction';
import { updateCart } from '../action/cartAction';

function* updateCartSaga() {
  const state = yield select((state) => state.getProductList.data);
  const cartItems = state.filter((item) => item.quantity > 0);
  yield put(updateCart(cartItems));
}

export default function* cartSaga() {
  yield takeLatest(UPDATE_PRODUCT_QUANTITY, updateCartSaga);
}