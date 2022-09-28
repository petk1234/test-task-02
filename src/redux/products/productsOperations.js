import axios from "axios";
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
        dispatch(productsActions.addProductSuccess(formData));
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
  ({ name, count, width, height, weight, photo, id, comments }) =>
  (dispatch) => {
    const formData = {
      name,
      count,
      size: { width, height },
      weight,
      photo,
      comments,
    };
    dispatch(productsActions.changeProductRequest());
    axios
      .patch(`http://localhost:3004/products/${id}`, formData)
      .then((res) => {
        dispatch(productsActions.changeProductSuccess(res.data));
      })
      .catch((error) => dispatch(productsActions.changeProductError(error)));
  };
export default { addProduct, getProducts, changeProduct };
