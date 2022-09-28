import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./productsActions";

const addProduct = (state, { type, payload }) => {
  return [...state, payload];
};
const handleChangeProduct = (state, { type, payload }) => {
  const stateChanged = state.map((product) => {
    if (product.id == payload.id) {
      return (product = payload);
    } else {
      return product;
    }
  });
  return stateChanged;
};
const productsReducer = createReducer([], {
  [actions.addProductSuccess]: addProduct,
  [actions.getProductsSuccess]: (state, { type, payload }) => payload,
  [actions.changeProduct]: handleChangeProduct,
});
const rootReducer = combineReducers({
  products: productsReducer,
});
export default rootReducer;
