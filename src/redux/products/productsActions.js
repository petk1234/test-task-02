import { createAction } from "@reduxjs/toolkit";

const addProductRequest = createAction("products/AddProductRequest");
const addProductSuccess = createAction("products/AddProductSuccess");
const addProductError = createAction("products/AddProductError");

const getProductsRequest = createAction("products/GetProductsRequest");
const getProductsSuccess = createAction("products/GetProductsSuccess");
const getProductsError = createAction("products/GetProductsError");

const changeProductRequest = createAction("products/ChangeProductRequest");
const changeProductSuccess = createAction("products/ChangeProductSuccess");
const changeProductError = createAction("products/ChangeProductError");

// const addCommentRequest = createAction("products/AddCommentRequest");
// const addCommentSuccess = createAction("products/AddCommentSuccess");
// const addCommentError = createAction("products/AddCommentError");

const deleteProductRequest = createAction("products/DeleteProductRequest");
const deleteProductSuccess = createAction("products/DeleteProductSuccess");
const deleteProductError = createAction("products/DeleteProductError");
export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  changeProductRequest,
  changeProductSuccess,
  changeProductError,
  // addCommentRequest,
  // addCommentSuccess,
  // addCommentError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
};
