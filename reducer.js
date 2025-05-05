import { combineReducers } from "redux";

import getProductList from "./reducer/getProductListReducer";
import cart from "./reducer/cartReducer";

export default combineReducers({
  getProductList,
  cart,
});
