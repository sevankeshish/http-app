import { useEffect, useState } from "react";
import axios from "axios";

import "./NewComment.css";

const NewComment = ({addNewComment}) => {
  const [comment, setComment] = useState({
    name:"",
    email:"",
    body:""
  })

  const changeHandler = (e) =>{
    setComment({...comment, [e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value);
  }

//  const postCommentHandler = () =>{
//   axios.post("http://localhost:3001/comments", {
//     ...comment,
//      postId:10,
//     })
//   .then((res)=>{console.log(res.data);})
//   .catch(()=>{})
//  }

  return (
    <div className="new-comment">
      <h2>Add New Commenet</h2>
      <div className="formControl">
        <label>name </label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea type="textarea" name="content" onChange={changeHandler} />
      </div>
      <button onClick={() => addNewComment(comment)}>Add New Commenet</button>
    </div>
  );
};

export default NewComment;
