import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./productsActions";

const sortingArray = (arr) => {
  return arr.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    let countA = a.count;
    let countB = b.count;
    if (nameA < nameB) {
      //сортируем строки по возрастанию
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return countB - countA;
    }
  });
};

const addProduct = (state, { type, payload }) => {
  return sortingArray([...state, payload]);
};

const handleChangeProduct = (state, { type, payload }) => {
  const stateChanged = state.map((product) => {
    if (product.id == payload.id) {
      return payload;
    } else {
      return product;
    }
  });
  return stateChanged;
};
const deleteProduct = (state, { type, payload }) => {
  return state.filter((product) => product.id !== payload);
};
const productsReducer = createReducer([], {
  [actions.addProductSuccess]: addProduct,
  [actions.getProductsSuccess]: (state, { type, payload }) =>
    sortingArray(payload),
  [actions.changeProductSuccess]: handleChangeProduct,
  [actions.deleteProductSuccess]: deleteProduct,
});
const rootReducer = combineReducers({
  products: productsReducer,
});
export default rootReducer;
