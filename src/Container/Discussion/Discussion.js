import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// import axios from "axios";
import http from "../../Services/httpServices";

import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";

import GetAllComments from "../../Services/getAllCommentsService";
import AddNewPost from "../../Services/addNewCommentService";

import "./discussion.css";

const Discussion = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   http
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
        const { data } = await GetAllComments();
        setComment(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = async (comment) => {
    try {
      await AddNewPost({ ...comment, postId: 10 });
      const { data } = await http.get("/comments");
      setComment(data);
    } catch (error) {}
  };

  // const postCommentHandler = (comment) => {
  //   http
  //     .post("/comments", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     .then((res) => http.get("/comments"))
  //     .then((res) => setComment(res.data))
  //     .catch();
  // };

  const renderComments = () => {
    let renderValue = <p>loading ...</p>;

    // if (error) renderValue = <p>fetching data failed !</p>;
    if (error) {
      renderValue = <p>fetching data failed !</p>;
      toast.error("there is an error");
    }

    if (comment && !error) {
      renderValue = comment.map((c) => (
        <Comment
          key={c.id}
          email={c.email}
          name={c.name}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setComments={setComment}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
