// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';
import AddEditPost from './components/AddEditPost';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<AddEditPost />} />
          <Route path="/edit/:id" element={<AddEditPost />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
