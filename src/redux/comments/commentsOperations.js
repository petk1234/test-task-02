import axios from "axios";
import commentsActions from "./commentsActions";

const addComment_ =
  ({ comment, date, productId }) =>
  (dispatch) => {
    dispatch(commentsActions.addCommentRequest());
    const formData = { description: comment, date, productId };
    axios
      .post("http://localhost:3004/comments", formData)
      .then((res) => {
        dispatch(commentsActions.addCommentSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(commentsActions.addCommentError(error)));
  };
const getComments = (id) => (dispatch) => {
  dispatch(commentsActions.getCommentsRequest());
  axios
    .get("http://localhost:3004/comments")
    .then((res) => {
      dispatch(commentsActions.getCommentsSuccess({ data: res.data, id }));
      return res.data;
    })
    .catch((error) => dispatch(commentsActions.getCommentsError(error)));
};
const deleteComment = (id) => (dispatch) => {
  dispatch(commentsActions.deleteCommentRequest());
  axios
    .delete(`http://localhost:3004/comments/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(commentsActions.deleteCommentSuccess(id));
      return res.data;
    })
    .catch((error) => dispatch(commentsActions.deleteCommentError(error)));
};
const deleteComments = (id) => (dispatch, getState) => {
  dispatch(commentsActions.deleteCommentsRequest());
  const commentsToDelete = getState().comments.comments.filter(
    (commentToDelete) => commentToDelete.productId == id
  );
  console.log(commentsToDelete);
  commentsToDelete.forEach((commentToDelete) => {
    deleteComment(commentToDelete.id);
  });
  // axios
  //   .delete(`http://localhost:3004/comments/${id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     dispatch(commentsActions.deleteCommentsSuccess(id));
  //     return res.data;
  //   })
  //   .catch((error) => dispatch(commentsActions.deleteCommentsError(error)));
};
export default { addComment_, deleteComment, getComments, deleteComments };
