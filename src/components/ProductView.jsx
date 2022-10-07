import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import productsOperations from "../redux/products/productsOperations";
import ProductsAddingModal from "./ProductsAddingModal";
import Comments from "./Comments";
export default function ProductView() {
  const params = useParams();
  const [isOpen, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  let [productInfo] = useSelector((state) =>
    state.products.products.filter((product) => product.id == params.id)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [isOpen, comments]);
  const handleChanging = (
    e,
    name,
    count,
    width,
    height,
    weight,
    photo,
    comments = [""],
    comment = "",
    date = ""
  ) => {
    e.preventDefault();
    dispatch(
      productsOperations.changeProduct({
        name,
        count,
        width,
        height,
        weight,
        photo,
        id: params.id,
        comments: [...comments, { comment, date, id: Number(params.id) }],
      })
    );
  };
  return (
    <div>
      {productInfo !== undefined && (
        <>
          <p>Name: {productInfo.name}</p>
          <img src={productInfo.photo} referrerPolicy="no-referrer"></img>
          <p>Count: {productInfo.count}</p>
          <p>Height: {productInfo.size.height}</p>
          <p>Width: {productInfo.size.width}</p>
          <p>Weight: {productInfo.weight}</p>
          <button onClick={() => setOpen(true)}>Edit</button>
          {isOpen && (
            <ProductsAddingModal
              setOpen={setOpen}
              operation={handleChanging}
              productInitial={productInfo}
            ></ProductsAddingModal>
          )}
          <Comments
            productInfo={JSON.stringify(productInfo)}
            setComments={setComments}
            addComment={handleChanging}
          />
        </>
      )}
    </div>
  );
}
