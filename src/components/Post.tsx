import { APIData } from "../types/APIData";

const Post = ({ body, id, title, userId }: APIData) => {
  return (
    <div className="postContainer">
      <h3>
        <span>TITLE:</span> {title}
      </h3>
      <p>
        <span>POST:</span> {body}
      </p>
      <p>
        <span>USERID:</span> {userId}
      </p>
      <p>
        <span>ID:</span> {id}
      </p>
    </div>
  );
};

export default Post;
