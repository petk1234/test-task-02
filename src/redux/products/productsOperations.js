import axios from "axios";
import commentsOperations from "../comments/commentsOperations";
import productsActions from "./productsActions";

const addProduct =
  ({ name, count, width, height, weight, photo, comments }) =>
  (dispatch) => {
    dispatch(productsActions.addProductRequest());
    const formData = {
      name,
      count,
      size: { width, height },
      weight,
      photo,
      comments,
    };
    console.log(formData);
    axios
      .post("http://localhost:3004/products", formData)
      .then((res) => {
        console.log(res.data);
        dispatch(productsActions.addProductSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(productsActions.addProductError(error)));
  };

const getProducts = () => (dispatch) => {
  dispatch(productsActions.getProductsRequest());
  axios
    .get("http://localhost:3004/products")
    .then((res) => {
      dispatch(productsActions.getProductsSuccess(res.data));
      return res.data;
    })
    .catch((error) => dispatch(productsActions.getProductsError(error)));
};
const changeProduct =
  ({
    name,
    count,
    width,
    height,
    weight,
    photo,
    id,
    formedComment,
    formedCommentToDelete,
  }) =>
  (dispatch, getState) => {
    console.log(getState());
    let [prevProductInfo] = getState().products.products.filter(
      (product) => product.id == id
    );
    // prevProductInfo = prevProductInfo.comments ? prevProductInfo : {comments: []}
    console.log(prevProductInfo);
    console.log(prevProductInfo.comments);
    const formData = {
      name,
      count,
      size: { width, height },
      weight,
      photo,
      comments:
        // ...(prevProductInfo ? prevProductInfo.comments : []),
        // formedComment,
        // prevProductInfo !== undefined
        // formedComment !== undefined
        //   ? prevProductInfo.comments.concat(formedComment)
        //   : formedCommentToDelete !== undefined &&
        //     prevProductInfo.comments.filter(
        //       (productComment) =>
        //         productComment.date !== formedCommentToDelete.date
        //     ),
        // : formedComment,
        formedComment !== undefined
          ? prevProductInfo.comments.concat(formedComment)
          : formedCommentToDelete !== undefined
          ? prevProductInfo.comments.filter(
              (productComment) =>
                productComment.date !== formedCommentToDelete.date &&
                productComment
            )
          : prevProductInfo.comments,
    };
    dispatch(productsActions.changeProductRequest());
    axios
      .patch(`http://localhost:3004/products/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        console.log(formData);
        dispatch(productsActions.changeProductSuccess(res.data));
      })
      .catch((error) => dispatch(productsActions.changeProductError(error)));
  };

const deleteProduct = (id) => (dispatch) => {
  dispatch(productsActions.deleteProductRequest());
  dispatch(commentsOperations.deleteComments(id));
  axios
    .delete(`http://localhost:3004/products/${id}`)
    .then((res) => dispatch(productsActions.deleteProductSuccess(id)))
    .catch((error) => dispatch(productsActions.deleteProductError(error)));
};
export default { addProduct, getProducts, changeProduct, deleteProduct };
