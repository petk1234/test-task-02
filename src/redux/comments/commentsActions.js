import { createAction } from "@reduxjs/toolkit";

const addCommentRequest = createAction("comments/AddCommentRequest");
const addCommentSuccess = createAction("comments/AddCommentSuccess");
const addCommentError = createAction("comments/AddCommentError");

const getCommentsRequest = createAction("comments/GetCommentsRequest");
const getCommentsSuccess = createAction("comments/GetCommentsSuccess");
const getCommentsError = createAction("comments/GetCommentsError");

const deleteCommentRequest = createAction("comments/DeleteCommentRequest");
const deleteCommentSuccess = createAction("comments/DeleteCommentSuccess");
const deleteCommentError = createAction("comments/DeleteCommentError");

const deleteCommentsRequest = createAction("comments/DeleteCommentsRequest");
const deleteCommentsSuccess = createAction("comments/DeleteCommentsSuccess");
const deleteCommentsError = createAction("comments/DeleteCommentsError");
export default {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentError,
  deleteCommentsRequest,
  deleteCommentsSuccess,
  deleteCommentsError,
};
