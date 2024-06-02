import React from 'react';

const Post = ({ post, currentUser, onDelete }) => {
  const isAuthor = post.author === currentUser;

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
      <div className="post-info">
        <span>Автор: {post.author}</span>
        <span>{new Date(post.timestamp).toLocaleString()}</span>
        {isAuthor && <button onClick={() => onDelete(post.id)}>Видалити</button>}
      </div>
    </div>
  );
};

export default Post;