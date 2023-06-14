import http from "./httpServices";

const GetOneComment = (id) => {
  return http.get(`/comments/${id}`);
};

export default GetOneComment;
