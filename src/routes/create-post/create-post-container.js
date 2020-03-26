// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { postsRequestPost, postsRequestGet, postsAreLoading } from '../../modules/posts';
import CreatePostView from './create-post-view';
import Loader from '../../components/loader';

const mapDispatchToProps = {
  postsRequestPost,
  postsRequestGet
};

const mapStateToProps = (state) => ({
  postsAreLoading: postsAreLoading(state)
});

class CreatePostContainer extends React.Component {
  state = {
    title: '',
    text: ''
  };

  handleTextOnChange = (event) => {
    const { target: { value } } = event;
    this.setState({
      text: value
    });
  };

  handleTitleOnChange = (event) => {
    const { target: { value } } = event;
    this.setState({
      title: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, text } = this.state;
    const payload = {
      id: uuid.v4(),
      title,
      text,
      timestamp: new Date()
    };
    await this.props.postsRequestPost(payload);
    this.props.postsRequestGet();
    this.props.history.push('/blogs');
  }

  render = () => {
    if (this.props.postsAreLoading) {
      return <Loader />;
    }
  
    return (
      <CreatePostView
        handleTitleOnChange={this.handleTitleOnChange}
        handleTextOnChange={this.handleTextOnChange}
        handleSubmit={this.handleSubmit}
        text={this.state.text}
        title={this.state.title}
      />
    );
  }
}

CreatePostContainer.propTypes = {
  postsRequestGet: PropTypes.func.isRequired,
  postsRequestPost: PropTypes.func.isRequired,
  postsAreLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer);