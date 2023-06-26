import { useEffect, useState } from "react";
import axios from "axios";

import "./FullComment.css";

const FullComment = ({ commentsId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentsId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentsId}`)
        // .then((res) => console.log(res.data))
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentsId]);

  const styles = {
    backgroundColor: " #efefef",
    color: "#444",
    padding: "10px",
  };

  let commentDetail = <p style={styles}>please select a comment !</p>;
  if (commentsId) commentDetail = <p>loading ... </p>;
  if (comment) {
    commentDetail = (
      <div className="full-comment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
