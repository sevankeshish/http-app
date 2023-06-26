import "./NewComment.css";

const NewComment = () => {
  return (
    <div className="new-comment">
      <h2>Add New Commenet</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" name="name" />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" name="email" />
      </div>
      <div className="formControl">
        <label>body</label>
        <input type="textarea" name="content" />
      </div>
      <button>Add New Commenet</button>
    </div>
  );
};

export default NewComment;
