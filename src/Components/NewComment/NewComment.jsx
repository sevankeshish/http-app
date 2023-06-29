import { useEffect, useState } from "react";
import axios from "axios";

import "./NewComment.css";
import { addNewComment } from "../../Services/AddNewComments";
import { GetAllComments } from "../../Services/GetAllComments";

const NewComment = (
  // {addNewComment}
  {setComments}
  ) => {
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
//   // .then((res)=>{console.log(res.data);})
//   .then((res) => axios.get("http://localhost:3001/comments"))
//   .then((res) => setComments(res.data))
//   .catch(()=>{})
//  }

const postCommentHandler = async() =>{
  try{
    await addNewComment({...comment,postId:10})
     const {data} = await GetAllComments()
    setComments(data)
  }
  catch(error){}
 }

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
      <button onClick={postCommentHandler}>Add New Commenet</button>
    </div>
  );
};

export default NewComment;
