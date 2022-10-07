import ProductsAddingModal from "./ProductsAddingModal";
import WarningModal from "./WarningModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import productsOperations from "../redux/products/productsOperations";
import { Link } from "react-router-dom";
export default function ProductsListView() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenWarning, setOpenWarning] = useState(false);
  let products = useSelector((state) => {
    return state.products.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [isOpen]);
  const handleAdding = (e, name, count, width, height, weight, photo) => {
    e.preventDefault();
    dispatch(
      productsOperations.addProduct({
        name,
        count,
        width,
        height,
        weight,
        photo,
        comments: [],
      })
    );
  };
  return (
    <>
      <ul>
        {(products !== undefined || products.length !== 0) &&
          products.map((product) => (
            <li key={product.id || product.photo}>
              <p>{product.name}</p>
              <Link to={`/product/${product.id}`}>
                <img
                  width="300px"
                  height="200px"
                  src={product.photo}
                  referrerPolicy="no-referrer"
                ></img>
              </Link>
              <button
                onClick={(e) => {
                  setOpenWarning(`true${product.id}`);
                }}
              ></button>
              {isOpenWarning === `true${product.id}` && (
                <WarningModal id={product.id} operation={setOpenWarning} />
              )}
            </li>
          ))}
      </ul>
      <button onClick={(e) => setOpen(true)}>Add</button>
      {isOpen && (
        <ProductsAddingModal setOpen={setOpen} operation={handleAdding} />
      )}
    </>
  );
}
