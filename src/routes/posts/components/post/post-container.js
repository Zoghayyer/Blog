// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postsRequestDelete,
  postsRequestGet,
  postsAreLoading
} from '../../../../modules/posts';
import Loader from '../../../../components/loader';
import PostView from './post-view';

const mapDisptachToProps = {
  postsRequestDelete,
  postsRequestGet
};

const mapStateToProps = (state) => ({
  postsAreLoading: postsAreLoading(state)
});

class PostContainer extends React.Component {
  handleDelete = async () => {
    await this.props.postsRequestDelete(this.props.id);
    this.props.postsRequestGet();
  };

  render = () => {
    if (this.props.postsAreLoading) {
      return <Loader />;
    }
  
    return (
      <PostView 
        id={this.props.id}
        title={this.props.title}
        text={this.props.text}
        handleDelete={this.handleDelete}
      />
    );
  }
}

PostContainer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postsRequestDelete: PropTypes.func.isRequired,
  postsRequestGet: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDisptachToProps)(PostContainer);
