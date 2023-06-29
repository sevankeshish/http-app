import http from "./HttpServices";
// import instance from "../axiosInstance";


export const DeleteComments = (commentsId) =>{
   return http.delete(`/comments/${commentsId}`);
}

// export const DeleteComments = (commentsId) =>{
//    return instance.delete(`/comments/${commentsId}`);
// }