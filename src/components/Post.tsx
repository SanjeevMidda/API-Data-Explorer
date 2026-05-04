import { APIData } from "../types/APIData";

const Post = ({ body, id, title, userId }: APIData) => {
  return (
    <div className="postContainer">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{userId}</p>
      <p>{id}</p>
    </div>
  );
};

export default Post;
