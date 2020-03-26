// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Post from './components/post';
import EditPost from './components/edit-post';
import Button from '../../components/button';
import './posts.scss';

const PostsView = ({ editPostId, deleteAllPosts, postsAll, history }) => (
  <div>
    {
      !!editPostId &&
      <EditPost id={editPostId} history={history} />
    }
    {
      !editPostId &&
        <div className="row posts d-flex justify-content-center ml-2 mr-2">
          <div className="col-12 posts-list">
            <div className="mb-4">
              <Link to="/createPost">
                <Button>
                  Create a new post
                </Button>
              </Link>
              <Button
                onClick={deleteAllPosts}
                theme="danger"
                className="ml-3"
              >
                Delete all posts
              </Button>
            </div>
            {
              postsAll.map((post, i) => (
                <Post key={`${post.id}-${i}`} {...post} />
              )) 
            }
          </div>
        </div>
    }
  </div>
);

PostsView.propTypes = {
  editPostId: PropTypes.string.isRequired,
  deleteAllPosts: PropTypes.func.isRequired,
  postsAll:  PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}

export default PostsView;