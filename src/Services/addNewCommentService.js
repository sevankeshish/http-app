import http from "./httpServices";

const AddNewPost = (data) => {
  return http.post("/comments", data);
};

export default AddNewPost;
