import { useState } from "react";
import styles from "./productsAddingModal.module.scss";
export default function ProductsAddingModal({
  setOpen,
  operation,
  productInitial,
}) {
  const [name, setName] = useState(productInitial ? productInitial.name : "");
  const [count, setCount] = useState(productInitial ? productInitial.count : 0);
  const [width, setWidth] = useState(
    productInitial ? Number(productInitial.size.width) : 0
  );
  const [height, setHeight] = useState(
    productInitial ? Number(productInitial.size.height) : 0
  );
  const [weight, setWeight] = useState(
    productInitial
      ? productInitial.weight.substring(0, productInitial.weight.length - 1)
      : ""
  );
  const [photo, setPhoto] = useState(
    productInitial ? productInitial.photo : ""
  );
  const handleProductAdding = (e) => {
    e.preventDefault();
    if (name !== "" && photo !== "" && weight !== "") {
      operation(e, name, count, width, height, `${weight}g`, photo);
      setOpen(false);
    }
  };
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Count</label>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
        <label>Width</label>
        <input value={width} onChange={(e) => setWidth(e.target.value)} />
        <label>Height</label>
        <input value={height} onChange={(e) => setHeight(e.target.value)} />
        <label>Weight</label>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Photo</label>
        <input value={photo} onChange={(e) => setPhoto(e.target.value)} />

        <button type="submit" onClick={handleProductAdding}>
          Confirm
        </button>
        <button
          type="button"
          className={styles.close}
          onClick={() => setOpen(false)}
        ></button>
      </form>
    </div>
  );
}
