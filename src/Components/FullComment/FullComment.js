import axios from "axios";
import { useEffect, useState } from "react";
import "./fullcomment.css";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  // console.log(comment);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentId]);
  // console.log(comment);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const styles = {
    backgroundColor: " #efefef",
    color: "#444",
    padding: "10px",
  };

  let commentDetail = <p style={styles}>please select a comment !</p>;

  if (commentId) commentDetail = <p>loading ...</p>;

  if (comment)
    return (
      <div className="full-comment">
        <p>name:{comment.name}</p>
        <p>email: {comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler} className="btn-del">
          Delete
        </button>
      </div>
    );
};

export default FullComment;
