// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postsAll,
  postsAreLoading,
  postsRequestDeleteAll,
  postsRequestGet
} from '../../modules/posts';
import Loader from '../../components/loader';
import PostsView from './posts-view';

const mapDisptachToProps = {
  postsRequestDeleteAll,
  postsRequestGet
};

const mapStateToProps = (state, ownProps) => ({
  postsAreLoading: postsAreLoading(state),
  postsAll: postsAll(state),
  editPostId: ownProps.match.params.key || ''
});

class PostsContainer extends React.Component {
  componentDidMount = () => {
    // Get all posts
    this.props.postsRequestGet();
  }

  deleteAllPosts = async () => {
    await this.props.postsRequestDeleteAll();
    this.props.postsRequestGet();
  };

  render = () => {
    const { postsAreLoading, postsAll } = this.props;

    if (postsAreLoading) {
      return <Loader />;
    }
    return (
      <PostsView
        editPostId={this.props.editPostId}
        deleteAllPosts={this.deleteAllPosts}
        postsAll={postsAll}
        history={this.props.history}
      />
    )
  };
}

PostsContainer.propTypes = {
  editPostId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  postsAll: PropTypes.array.isRequired,
  postsAreLoading: PropTypes.bool.isRequired,
  postsRequestDeleteAll: PropTypes.func.isRequired,
  postsRequestGet: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDisptachToProps)(PostsContainer);
