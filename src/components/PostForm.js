import React, { useState } from 'react';

const PostForm = ({ onSubmit, currentUser }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Будь ласка, заповніть всі поля');
      return;
    }
    onSubmit({ title, content, image, author: currentUser });
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Заголовок   </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Зміст   </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Фото (необов'язково)  </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Опублікувати</button>
    </form>
  );
};

export default PostForm;