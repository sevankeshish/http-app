import "./FullComment.css"

const FullComment = ({commentsId}) => {
    console.log(commentsId);
    return (  
        <div className="full-comment" >
            <p>name</p>
            <p>email</p>
            <p>body</p>
        </div>
    );
}
 
export default FullComment;