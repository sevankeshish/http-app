import axios from "axios";
import { useEffect, useState } from "react";
import "./fullcomment.css";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  console.log(comment);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${commentId}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentId]);
  console.log(comment);

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
        <p>name:{comment.id}</p>
        <p>email: {comment.title}</p>
        <p>{comment.body}</p>
      </div>
    );
};

export default FullComment;
