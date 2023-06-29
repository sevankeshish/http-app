import http from "./HttpServices"

export const GetOneComment = (id) =>{
    return http.get(`/comments/${id}`)
}