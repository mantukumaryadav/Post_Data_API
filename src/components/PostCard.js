import React from 'react';

const PostCard = ({ post, onRemove }) => {
  return (
    <div className="card h-100 shadow">
      <span className="close mt-auto p-2 " onClick={() => onRemove(post.id)}>
          &#10006;
        </span>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        
      </div>
    </div>
  );
};

export default PostCard;
