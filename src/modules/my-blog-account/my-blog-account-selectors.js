// Ahmed Zoghayyer
// ------------------------------------
// Selectors
// ------------------------------------
export const myBlogAccountTree = (state) => state.blogAccount || {};
export const myBlogAccountUsername = (state) => myBlogAccountTree(state).username || '';
export const myBlogAccountUserId = (state) => myBlogAccountTree(state).id || '';
export const myBlogAccountIsUserLoggedIn = (state) => (
  !!myBlogAccountUsername(state).length && !!myBlogAccountUserId(state).length
);