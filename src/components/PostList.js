import React from 'react';
import Post from './Post';

const PostList = ({ posts, currentUser, onDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          currentUser={currentUser}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;