import { useEffect, useState } from "react";
import axios from "axios";

import "./FullComment.css";
import { GetAllComments } from "../../Services/GetAllComments";
import { DeleteComments } from "../../Services/DeleteComments";
import { GetOneComment } from "../../Services/GetOneComment";

const FullComment = ({ setComments, setSelectedId, match }) => {
  const [comment, setComment] = useState(null);

  console.log(match.params.id);
  const commentsId = match.params.id

  useEffect(() => {
    if (commentsId) {
        GetOneComment(commentsId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentsId]);

  //  const deleteHandler = () =>{
    // axios.delete(`http://localhost:3001/comments/${commentsId}`)
  //   .then((res)=>{console.log(res)})
  //   .catch((error)=>{console.log(error);})
  // }

 const deleteHandler = async ()=>{
    try{
      await DeleteComments(commentsId)
      const {data} = await GetAllComments()
      setComments(data)
      setSelectedId(null)
      setComment(null)
    }
    catch(error){
    }
 }

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
        <button onClick={deleteHandler}> Delete </button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
