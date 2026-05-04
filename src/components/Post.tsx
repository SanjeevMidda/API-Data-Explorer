import { useState } from "react";
import { APIData } from "../types/APIData";

type PostProps = {
  post: APIData;
  selectedPost: APIData | null;
  onSelectPost: (post: APIData) => void;
};

const Post = ({ post, onSelectPost, selectedPost }: PostProps) => {
  const isSelected = selectedPost?.id === post.id;

  return (
    <div className="postContainer" onClick={() => onSelectPost(post)}>
      <h3>
        <span>TITLE:</span> {post.title}
      </h3>

      {isSelected && (
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
