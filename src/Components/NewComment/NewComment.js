// import axios from "axios";
import http from "../../../src/Services/httpServices";
import { useState } from "react";

import "./newComment.css";

const NewComment = ({ onAddPost }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  // const postCommentHandler = () => {
  // http
  //     .post("http://localhost:3001/comments", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch();
  // };

  return (
    <div className="new-comment">
      <h2>Add New Commenet</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>body</label>
        <input type="textarea" name="content" onChange={changeHandler} />
      </div>
      <button onClick={() => onAddPost(comment)}>Add New Commenet</button>
    </div>
  );
};

export default NewComment;
