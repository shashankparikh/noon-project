import { call, put, takeLatest } from "redux-saga/effects";
// Action
import {
  GET_PRODUCT_LIST,
  getProductListSuccess,
  getProductListFail,
} from "../action/getProductListAction";
// Api
import { getProductListApi } from "../apis/getProductListApi";

export function* getProductListSaga(action) {
  try {
    const response = yield call(() => getProductListApi(action.page));
    if (response) yield put(getProductListSuccess(response, action));
    else yield put(getProductListFail(response, action));
  } catch (e) {
    yield put(getProductListFail(e.response, action));
  }
}

export default function* mySaga() {
  yield takeLatest(GET_PRODUCT_LIST, getProductListSaga);
}
