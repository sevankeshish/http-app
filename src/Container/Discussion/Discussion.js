import { useEffect, useState } from "react";

import axios from "axios";

import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";

import "./discussion.css";

const Discussion = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setComment(response.data.slice(0, 4));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComment(res.data))
      .catch();
  };

  return (
    <main>
      <section>
        {comment ? (
          comment.map((c) => (
            <Comment
              key={c.id}
              email={c.email}
              name={c.name}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
