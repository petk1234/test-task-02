import axios from "axios";
import commentsActions from "./commentsActions";

const addComment_ =
  ({ comment, date, productId }) =>
  (dispatch) => {
    dispatch(commentsActions.addCommentRequest());
    const formData = { comment, date, productId };
    axios
      .post("http://localhost:3004/comments", formData)
      .then((res) => {
        dispatch(commentsActions.addCommentSuccess(formData));
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
export default { addComment_, getComments };
