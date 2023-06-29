import http from "./HttpServices"

export const addNewComment = (data) =>{
   return http.post("/comments", data)

} 