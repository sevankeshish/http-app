import axios from "axios";

axios.defaults.baseURL= "http://localhost:3001"

axios.interceptors.request.use(
    (request)=>{
        console.log(request);
        return request
    },
    (error)=>{
        console.log(error);
        return Promise.reject() 
    })

axios.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response
    },
    (error)=>{
        console.log(error);
        return Promise.reject()
    })

 const http = {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put
}

export default http

//npx json-server --watch data/db.json --port 3001