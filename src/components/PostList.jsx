// src/components/PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, setPosts } from '../redux/actions';
import axios from 'axios';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);


  console.log(posts)
  useEffect(() => {

    dispatch(setPosts(posts));


  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/add">Add New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" style={{ width: '100px', height: '100px' }} />}
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
