import { useEffect, useState } from "react";
import axios from "axios";

import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";

import "./Discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

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
        const { data } = await axios.get(
          "http://localhost:3001/comments"
        );
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selecIdHandler = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = (comment) =>{
    axios.post("http://localhost:3001/comments", {
      ...comment,
       postId:10,
      })
    // .then((res)=>{console.log(res.data);})
    .then((res) => axios.get("http://localhost:3001/comments"))
    .then((res) => setComments(res.data))
    .catch(()=>{})
   }
  

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              commentName={c.name}
              commentEmail={c.email}
              handleClick={() => selecIdHandler(c.id)}
            />
          ))
        ) : (
          <p>loading ... .</p>
        )}
      </section>
      <section>
        <FullComment commentsId={selectedId} />
      </section>
      <section>
        <NewComment addNewComment={postCommentHandler}/>
      </section>
    </main>
  );
};

export default Discussion;
