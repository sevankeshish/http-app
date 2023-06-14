// import axios from "axios";
import http from "../../Services/httpServices";
import { useEffect, useState } from "react";

import GetAllComments from "../../Services/getAllCommentsService";
import DeleteComment from "../../Services/deleteCommentService";
import GetOneComment from "../../Services/getOneCommentService";
import AddNewPost from "../../Services/addNewCommentService";

import "./fullcomment.css";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  // console.log(comment);

  useEffect(() => {
    if (commentId) {
      GetOneComment(commentId)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentId]);
  // console.log(comment);

  // const deleteHandler = () => {
  //   http
  //     .delete(`/comments/${commentId}`)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  const deleteHandler = async () => {
    try {
      await DeleteComment(commentId);
      const { data } = await GetAllComments();
      setComments(data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {}
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
