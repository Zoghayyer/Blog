// Ahmed Zoghayyer
// ------------------------------------
// Selectors
// ------------------------------------
export const postsTree = (state) => state.posts || {};
export const postsAreLoading = (state) => postsTree(state).isLoading;
export const postsAll = (state) => postsTree(state).posts || [];
export const postById = (state, id) => postsAll(state).find((post) => post.id === parseInt(id)) || {};
export const postByIdTitle = (state, id) => postById(state, id).title || '';
export const postByIdText = (state, id) => postById(state, id).text || '';