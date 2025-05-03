export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const updateCart = (productList) => ({
  type: UPDATE_CART,
  payload: productList,
});

export const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
