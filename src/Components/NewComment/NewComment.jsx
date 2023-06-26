import "./NewComment.css"

const NewComment = () => {
    return ( 
        <div className="new-comment">
            <label>name</label>
            <input type="text"/>
            <label>email</label>
            <input type="email"/>
            <label>body</label>
            <input type="textarea"/>
        </div>
     );
}
 
export default NewComment;