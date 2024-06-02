import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = 'noname'; 

  const handleSubmit = (newPost) => {
    setPosts([
      ...posts,
      { id: posts.length + 1, ...newPost, timestamp: new Date().getTime() },
    ]);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <h1>Just Форум</h1>
      <PostForm onSubmit={handleSubmit} currentUser={currentUser} />
      <PostList
        posts={posts}
        currentUser={currentUser}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;