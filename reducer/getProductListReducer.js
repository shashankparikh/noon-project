import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_RESET,
  UPDATE_PRODUCT_QUANTITY,
} from "../action/getProductListAction";

const initialState = {
  apiState: "",
  message: "",
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_PRODUCT_LIST_SUCCESS:
      const mergedData = [...state.data, ...action.response.data.products];
      const seenIds = new Set();
      const uniqueData = mergedData.filter((product) => {
        if (seenIds.has(product.id)) {
          return false; // Skip duplicate
        }
        seenIds.add(product.id); // Mark the id as seen
        return true; // Keep unique product
      });
      return {
        ...state,
        apiState: "success",
        data: uniqueData,
      };

    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
        message: "Something went wrong",
      };

    case GET_PRODUCT_LIST_RESET:
      return initialState;

    case UPDATE_PRODUCT_QUANTITY:
      console.log(action.payload, "action.payload");
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id ? { ...action.payload } : product
        ),
      };
    default:
      return state;
  }
}
