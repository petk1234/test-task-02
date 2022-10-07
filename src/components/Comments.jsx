import { Fragment, useEffect, useState } from "react";
import commentsOperations from "../redux/comments/commentsOperations";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import productsOperations from "../redux/products/productsOperations";
export default function Comments({ productInfo, addComment, setComments }) {
  const [comment, setComment] = useState("");
  const parsedInfo = JSON.parse(productInfo);
  const { name, count, size, weight, photo, comments, id } = parsedInfo;
  const { width, height } = size;
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  let time = date.toLocaleTimeString();
  date = mm + "/" + dd + "/" + yyyy + " " + time;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("aas");
    dispatch(commentsOperations.getComments(id));
  }, []);

  const handleCommentAdding = (e) => {
    const formedComment = {
      comment,
      date,
      productId: id,
    };
    e.preventDefault();
    dispatch(commentsOperations.addComment_(formedComment));
    dispatch(
      productsOperations.changeProduct({
        name,
        count,
        width,
        height,
        weight,
        photo,
        id,
        formedComment,
      })
    );
    // dispatch(commentsOperations.getComments(id));
  };
  const commentsFromServer = useSelector((state) => state.comments.comments);
  console.log(commentsFromServer);
  return (
    <>
      <h1>Comments</h1>
      <form>
        <input
          placeholder="Write your comment"
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button onClick={handleCommentAdding}>Add your comment</button>
        <ul>
          {/* {commentsFromServer.map((commentFromServer) => {
            return (
              commentFromServer.id && (
                <Comment
                  key={commentFromServer.id}
                  commentFromServer={commentFromServer}
                ></Comment>
              )
            );
          })} */}
          {commentsFromServer.map((commentFromServer) => (
            <Comment
              key={commentFromServer.id}
              commentFromServer={commentFromServer}
              parsedInfo={parsedInfo}
            ></Comment>
          ))}
        </ul>
      </form>
    </>
  );
}
