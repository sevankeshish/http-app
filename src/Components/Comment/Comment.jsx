import "./Comment.css"

const Comment = ({commentName, commentEmail,handleClick}) =>{
   

    return (
        <div className="comment" onClick={handleClick}>
            <p>name : {commentName}</p>
            <p>email: {commentEmail}</p>
        </div>
    )

}

export default Comment