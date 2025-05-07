export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS";
export const GET_PRODUCT_LIST_FAIL = "GET_PRODUCT_LIST_FAIL";
export const GET_PRODUCT_LIST_RESET = "GET_PRODUCT_LIST_RESET";
export const UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY";

export const getProductList = (page) => {
  return { type: GET_PRODUCT_LIST, page };
};

export const getProductListSuccess = (response) => {
  return { type: GET_PRODUCT_LIST_SUCCESS, response };
};

export const getProductListFail = (response) => {
  return { type: GET_PRODUCT_LIST_FAIL, response };
};

export const getProductListReset = () => {
  return { type: GET_PRODUCT_LIST_RESET };
};

export const updateProductQuantity = (updatedProduct) => {
  // console.log(updatedProduct,'updatedProduct action')

  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: updatedProduct,
  };
};
