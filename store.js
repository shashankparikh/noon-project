import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleWare from "redux-saga";
//Reducer
import reducer from "./reducer";
//Saga
import getProductListSaga from "./saga/getProductListSaga";
import cartSaga from "./saga/cartSaga";

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  reducer,
  composeWithDevTools(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getProductListSaga);
sagaMiddleware.run(cartSaga);

export default store;
