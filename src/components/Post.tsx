import { useState } from "react";
import { APIData } from "../types/APIData";

type PostProps = {
  post: APIData;
};

const Post = ({ post }: PostProps) => {
  // const Post = ({ body, id, title, userId }: APIData) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="postContainer" onClick={() => setDropDown((prev) => !prev)}>
      <h3>
        <span>TITLE:</span> {post.title}
      </h3>

      {dropDown && (
        <>
          <p>
            <span>POST:</span> {post.body}
          </p>
          <p>
            <span>USERID:</span> {post.userId}
          </p>
          <p>
            <span>ID:</span> {post.id}
          </p>
        </>
      )}
    </div>
  );
};

export default Post;
