import { useEffect,useState } from "react"
import axios from "axios"

import "./FullComment.css"

const FullComment = ({commentsId}) => {
    const [comment, setComment] = useState(null)

    useEffect(()=>{
        if(commentsId){
            axios
                .get(`https://jsonplaceholder.typicode.com/comments/${commentsId}`)
                .then((res)=>console.log(res.data))
                // .then((res)=>setComment(res.data))
                .catch()
        }
    },[commentsId])

    let commentDetail = <p>please select a comment !</p>;
    if(commentsId) commentDetail = <p>loading ... </p>;
    if(comment){
        commentDetail=(
            <div className="full-comment" >
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
             </div>
        );
    }

    return commentDetail
}
 
export default FullComment;