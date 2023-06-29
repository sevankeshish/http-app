import http from "./HttpServices";


export const GetAllComments = () =>{
   return http.get("/comments");
}