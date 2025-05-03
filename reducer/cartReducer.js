import {
  UPDATE_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
} from "../action/cartAction";

const initialState = {
  cartItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}
