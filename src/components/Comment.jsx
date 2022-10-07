import { useDispatch } from "react-redux";
import commentsOperations from "../redux/comments/commentsOperations";
import productsOperations from "../redux/products/productsOperations";
export default function Comment({ commentFromServer, parsedInfo }) {
  const dispatch = useDispatch();
  const { name, count, size, weight, photo, comments, id } = parsedInfo;
  const { width, height } = size;
  console.log(commentFromServer);
  return (
    <li key={commentFromServer.id}>
      <p>{commentFromServer.date}</p>
      <p>{commentFromServer.description}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(commentsOperations.deleteComment(commentFromServer.id));
          dispatch(
            productsOperations.changeProduct({
              name,
              count,
              width,
              height,
              weight,
              photo,
              id: commentFromServer.productId,
              formedCommentToDelete: commentFromServer,
            })
          );
        }}
      ></button>
    </li>
  );
}
