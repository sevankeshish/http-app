import { useEffect, useState } from "react";
// import axios from "axios";
import { toast} from 'react-toastify';

import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";

import "./Discussion.css";
// import http from "../../Services/HttpServices";
import { GetAllComments } from "../../Services/GetAllComments";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false)

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/comments")
    // .then((response)=>{
    //     setComments(response.data.slice(0,4))
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    // async function getComments() {
    const getComments = async () => {
      try {
        const { data } = await GetAllComments();
        setComments(data);
      } catch (error) {
        //calling error which backend sets
        // setError({message:error.message})
        setError(true)
      }
    };
    getComments();
  }, []);

  const selecIdHandler = (id) => {
    setSelectedId(id);
  };

  // const postCommentHandler = (comment) =>{
  //   axios.post("http://localhost:3001/comments", {
  //     ...comment,
  //      postId:10,
  //     })
  //   // .then((res)=>{console.log(res.data);})
  //   .then((res) => axios.get("http://localhost:3001/comments"))
  //   .then((res) => setComments(res.data))
  //   .catch(()=>{})
  //  }
  
  const renderComments = () =>{
    let renderValue = <p>loading ... .</p>
    //calling error which backend sets
    // if(error) renderValue = <p>{error.message}</p>
    if(error){
      renderValue = <p>fetching data failed !</p>
      toast.error("fetching data failed !")
    } 
    if(comments && !error){
      renderValue = comments.map((c) => (
       <Comment
         key={c.id}
         commentName={c.name}
         commentEmail={c.email}
         handleClick={() => selecIdHandler(c.id)}
       />
     ))
    }
    return renderValue
  }

  return (
    <main>
      <section>
        {renderComments()}
      </section>
      {/* <section>
        <FullComment commentsId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/>
      </section> */}
      {/* <section>
        <NewComment setComments={setComments}/>
      </section> */}
    </main>
  );
};

export default Discussion;
