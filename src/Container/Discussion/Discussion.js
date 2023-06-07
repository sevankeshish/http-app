import { useEffect, useState } from "react";

import axios from "axios";

import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";

import "./discussion.css";

const Discussion = () => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        setComment(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section>
        {comment ? (
          comment.map((c) => (
            <Comment key={c.ide} email={c.title} name={c.id} />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
