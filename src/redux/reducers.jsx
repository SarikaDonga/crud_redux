// src/redux/reducer.js
import { ADD_POST, DELETE_POST, UPDATE_POST, SET_POSTS } from './actions';
import products from '../data/product';
const initialState = {
  posts: products
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
