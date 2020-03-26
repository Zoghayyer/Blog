// Ahmed Zoghayyer
import {
  blogClient as api
} from './providers/axios';

export const daoPostsGet = () => api.get(`api/`);
export const daoPostsPost = (payload) => api.post(`api/`, payload);
export const daoPostsPut = (id, payload) => api.post(`api/${id}`, payload);
export const daoPostsDelete = (id) => api.delete(`api/${id}`);
export const daoPostsDeleteAll = () => api.delete('api/');

export default {
  daoPostsDelete,
  daoPostsDeleteAll,
  daoPostsGet,
  daoPostsPost,
  daoPostsPut
};