// Ahmed Zoghayyer
import {
  MY_BLOG_ACCOUNT_USERNAME_UPDATE
} from './my-blog-account-action-types';

// ------------------------------------
// Actions
// ------------------------------------

export const myBlogAccountUsernameUpdate = (payload = {}) => ({
  type: MY_BLOG_ACCOUNT_USERNAME_UPDATE,
  payload
});