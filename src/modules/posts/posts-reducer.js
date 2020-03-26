// Ahmed Zoghayyer
import {
  POSTS_REQUEST_GET,
  POSTS_RECEIVE_GET_SUCCESS,
  POSTS_RECEIVE_GET_FAILURE,
  POSTS_REQUEST_POST,
  POSTS_RECEIVE_POST_SUCCESS,
  POSTS_RECEIVE_POST_FAILURE,
  POSTS_REQUEST_DELETE,
  POSTS_RECEIVE_DELETE_SUCCESS,
  POSTS_RECEIVE_DELETE_FAILURE,
  POSTS_REQUEST_DELETE_ALL,
  POSTS_RECEIVE_DELETE_ALL_SUCCESS,
  POSTS_RECEIVE_DELETE_ALL_FAILURE,
  POSTS_REQUEST_PUT,
  POSTS_RECEIVE_PUT_SUCCESS,
  POSTS_RECEIVE_PUT_FAILURE
} from './posts-action-types';
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  posts: [],
  isLoading: false
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [POSTS_REQUEST_GET]: (state) => ({
    ...state,
    isLoading: true
  }),
  [POSTS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      return {
        ...state,
        posts: [
          ...action.payload
        ],
        isLoading: false
      }
    }
    return {
      ...state,
      isLoading: false
    }
  },
  [POSTS_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_REQUEST_POST]: (state) => ({
    ...state,
    isLoading: true
  }),
  [POSTS_RECEIVE_POST_SUCCESS]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_RECEIVE_POST_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_REQUEST_DELETE]: (state) => ({
    ...state,
    isLoading: true
  }),
  [POSTS_RECEIVE_DELETE_SUCCESS]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_RECEIVE_DELETE_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_REQUEST_DELETE_ALL]: (state) => ({
    ...state,
    isLoading: true
  }),
  [POSTS_RECEIVE_DELETE_ALL_SUCCESS]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_RECEIVE_DELETE_ALL_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_REQUEST_PUT]: (state) => ({
    ...state,
    isLoading: true
  }),
  [POSTS_RECEIVE_PUT_SUCCESS]: (state) => ({
    ...state,
    isLoading: false
  }),
  [POSTS_RECEIVE_PUT_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  })
 });
// ------------------------------------
// Reducer
// ------------------------------------
export const postsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default postsReducer;