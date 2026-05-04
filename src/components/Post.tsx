import { useState } from "react";
import { APIData } from "../types/APIData";

const Post = ({ body, id, title, userId }: APIData) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="postContainer" onClick={() => setDropDown((prev) => !prev)}>
      <h3>
        <span>TITLE:</span> {title}
      </h3>

      {dropDown && (
        <>
          <p>
            <span>POST:</span> {body}
          </p>
          <p>
            <span>USERID:</span> {userId}
          </p>
          <p>
            <span>ID:</span> {id}
          </p>
        </>
      )}
    </div>
  );
};

export default Post;
