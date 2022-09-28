import { createAction } from "@reduxjs/toolkit";

const addCommentRequest = createAction("comments/AddCommentRequest");
const addCommentSuccess = createAction("comments/AddCommentSuccess");
const addCommentError = createAction("comments/AddCommentError");

const getCommentsRequest = createAction("comments/GetCommentsRequest");
const getCommentsSuccess = createAction("comments/GetCommentsSuccess");
const getCommentsError = createAction("comments/GetCommentsError");
export default {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
};
