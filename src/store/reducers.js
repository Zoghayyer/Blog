// Ahmed Zoghayyer
import { combineReducers } from 'redux';
import { myBlogAccountReducer } from '../modules/my-blog-account';
import { postsReducer } from '../modules/posts';

export const makeRootReducerFactory = ({ combineReducers, ...reducers }) => (asyncReducers) => combineReducers({
  // Add sync reducers here
  ...reducers,
  ...asyncReducers
});

export const makeRootReducer = makeRootReducerFactory({
  combineReducers,
  blogAccount: myBlogAccountReducer,
  posts: postsReducer
});

export default makeRootReducer;