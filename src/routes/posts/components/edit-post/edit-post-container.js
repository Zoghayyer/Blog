// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postsRequestGet,
  postsRequestPut,
  postsAreLoading,
  postByIdTitle,
  postByIdText
} from '../../../../modules/posts';
import Loader from '../../../../components/loader';
import EditPostView from './edit-post-view';

const mapDisptachToProps = {
  postsRequestGet,
  postsRequestPut
};

const mapStateToProps = (state, ownProps) => ({
  postsAreLoading: postsAreLoading(state),
  title: postByIdTitle(state, ownProps.id),
  text: postByIdText(state, ownProps.id)
});

class EditPostContainer extends React.Component {
  state = {
    title: '',
    text: ''
  };

  componentDidMount = () => {
    const { title, text } = this.props;
    this.setState({
      title,
      text
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, text } = this.state;
    const payload = {
      title,
      text
    };
    await this.props.postsRequestPut(this.props.id, payload);
    this.props.postsRequestGet();
    this.props.history.push('/blogs');
  };

  handleTitleOnChange = (event) => {
    const { target: { value = '' } = {} } = event;
    this.setState({
      title: value
    });
  }

  handleTextOnChange = (event) => {
    const { target: { value = '' } = {} } = event;
    this.setState({
      text: value
    });
  }

  render = () => {
    if (this.props.postsAreLoading) {
      return <Loader />;
    }
  
    return (
      <EditPostView 
        handleTitleOnChange={this.handleTitleOnChange}
        handleTextOnChange={this.handleTextOnChange}
        handleSubmit={this.handleSubmit}
        text={this.state.text}
        title={this.state.title}
        id={this.props.id}
      />
    );
  }
}

EditPostContainer.propTypes = {
  history: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postsRequestGet: PropTypes.func.isRequired,
  postsRequestPut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDisptachToProps)(EditPostContainer);
