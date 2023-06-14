import http from "./httpServices";

const DeleteComment = (commentId) => {
  return http.delete(`/comments/${commentId}`);
};

export default DeleteComment;
