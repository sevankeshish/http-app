import http from "./httpServices";

const GetAllComments = () => {
  return http.get("/comments");
};

export default GetAllComments;
