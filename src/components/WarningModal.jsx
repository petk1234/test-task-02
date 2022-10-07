import styles from "./productsWarningModal.module.scss";
import productsOperations from "../redux/products/productsOperations";
import { useDispatch } from "react-redux";
export default function WarningModal({ operation, id }) {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <div className={styles.modal}>
      <div className={styles.warning}>
        <p>Do you really want to delete this product?</p>
        <button onClick={() => operation(false)}>Cancel</button>
        <button
          onClick={(e) => {
            dispatch(productsOperations.deleteProduct(id));
            operation(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
