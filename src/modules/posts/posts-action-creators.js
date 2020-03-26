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
import {
  daoPostsDelete,
  daoPostsDeleteAll,
  daoPostsGet,
  daoPostsPost,
  daoPostsPut
} from '../../dao/posts-dao';

// ------------------------------------
// Actions
// ------------------------------------

export const postsReceiveGetSuccess = (payload = {}) => ({
  type: POSTS_RECEIVE_GET_SUCCESS,
  payload
});

export const postsReceiveGetFailure = (payload = {}) => ({
  type: POSTS_RECEIVE_GET_FAILURE,
  payload
});

export const postsRequestGet = () => async (dispatch) => {
  dispatch({
    type: POSTS_REQUEST_GET
  });

  try {
    const { data } = await daoPostsGet();
    return dispatch(postsReceiveGetSuccess(data));
  } catch (error) {
    return dispatch(postsReceiveGetFailure(error));
  }
};

export const postsReceivePostSuccess = (payload = {}) => ({
  type: POSTS_RECEIVE_POST_SUCCESS,
  payload
});

export const postsReceivePostFailure = (payload = {}) => ({
  type: POSTS_RECEIVE_POST_FAILURE,
  payload
});

export const postsRequestPost = (payload) => async (dispatch) => {
  dispatch({
    type: POSTS_REQUEST_POST
  });

  try {
    await daoPostsPost(payload);
    return dispatch(postsReceiveGetSuccess());
  } catch (error) {
    return dispatch(postsReceiveGetFailure(error));
  }
};

export const postsReceiveDeleteSuccess = (payload = {}) => ({
  type: POSTS_RECEIVE_DELETE_SUCCESS,
  payload
});

export const postsReceiveDeleteFailure = (payload = {}) => ({
  type: POSTS_RECEIVE_DELETE_FAILURE,
  payload
});

export const postsRequestDelete = (id) => async (dispatch) => {
  dispatch({
    type: POSTS_REQUEST_DELETE
  });

  try {
    await daoPostsDelete(id);
    return dispatch(postsReceiveDeleteSuccess());
  } catch (error) {
    return dispatch(postsReceiveDeleteFailure(error));
  }
};

export const postsReceiveDeleteAllSuccess = (payload = {}) => ({
  type: POSTS_RECEIVE_DELETE_ALL_SUCCESS,
  payload
});

export const postsReceiveDeleteAllFailure = (payload = {}) => ({
  type: POSTS_RECEIVE_DELETE_ALL_FAILURE,
  payload
});

export const postsRequestDeleteAll = () => async (dispatch) => {
  dispatch({
    type: POSTS_REQUEST_DELETE_ALL
  });

  try {
    await daoPostsDeleteAll();
    return dispatch(postsReceiveDeleteAllSuccess());
  } catch (error) {
    return dispatch(postsReceiveDeleteAllFailure(error));
  }
};

export const postsReceivePutSuccess = (payload = {}) => ({
  type: POSTS_RECEIVE_PUT_SUCCESS,
  payload
});

export const postsReceivePutFailure = (payload = {}) => ({
  type: POSTS_RECEIVE_PUT_FAILURE,
  payload
});

export const postsRequestPut = (id, payload) => async (dispatch) => {
  dispatch({
    type: POSTS_REQUEST_PUT
  });

  try {
    await daoPostsPut(id, payload);
    return dispatch(postsReceivePutSuccess());
  } catch (error) {
    return dispatch(postsReceivePutFailure(error));
  }
};