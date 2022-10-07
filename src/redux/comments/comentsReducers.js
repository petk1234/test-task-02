import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./commentsActions";

const addComment = (state, { type, payload }) => {
  return [...state, payload];
};
const getComments = (state, { type, payload }) => {
  const { data, id } = payload;
  const stateChanged = data.filter(
    (comment) => comment.productId == id && comment
  );
  return stateChanged;
};
const deleteComment = (state, { type, payload }) => {
  // return state.filter
  console.log(payload);
  return state.filter((comment) => comment.id !== payload);
};
const commentReducer = createReducer([], {
  [actions.addCommentSuccess]: addComment,
  [actions.getCommentsSuccess]: getComments,
  [actions.deleteCommentSuccess]: deleteComment,
});
const rootReducer2 = combineReducers({
  comments: commentReducer,
});
export default rootReducer2;
