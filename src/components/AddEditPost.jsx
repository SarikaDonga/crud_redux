// src/components/AddEditPost.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditPost = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const posts = useSelector((state) => state.posts);
  const post = id ? posts.find((post) => post.id === parseInt(id)) : null;
  
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [image, setImage] = useState(post ? post.image : '');
  
  useEffect(() => {
    if (post === undefined) {
      navigate('/');
    }
  }, [post, navigate]);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newPost = { id: id ? parseInt(id) : Date.now(), title, content, image };
    if (id) {
      dispatch(updatePost(newPost));
    } else {
      dispatch(addPost(newPost));
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'Add Post'}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Post Image" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
      <button onClick={handleSubmit}>{id ? 'Update Post' : 'Add Post'}</button>
    </div>
  );
};

export default AddEditPost;
