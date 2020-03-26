// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  myBlogAccountUsernameUpdate
} from '../../modules/my-blog-account';
import Session from '../../lib/session';
import LoginView from './login-view';
import uuid from 'uuid';

const mapDispatchToProps = {
  myBlogAccountUsernameUpdate
}

class LoginContainer extends React.Component {
  state = {
    username: '',
    invalidLogin: false
  };

  validateUsername = (username = '') => (
    !!username.length && username.replace(/[^a-zA-Z0-9 ' ']/g, '').length === username.length
  );

  handleSubmit = (event) => {
    event.preventDefault();
    const { username =  ''} = this.state;

    if (this.validateUsername(username)) {
      const generateUniqueId = uuid.v4();
      const loginTime = Date.now();
      const userDetails = {
        username,
        id: generateUniqueId,
        loginTime
      };
      // Store username in redux
      this.props.myBlogAccountUsernameUpdate(userDetails);
      // Store username in the window.sessionStorage
      Session.setItem('user', JSON.stringify(userDetails));
      // Redirect users to the main page by default
      this.props.history.push('/blogs');
      return;
    }
    this.setState({
      invalidLogin: true
    });
  };

  handleUsernameChange = (event) => {
    const { target: { value = ''} = {}} = event;

    this.setState({
      username: value
    });
  }

  render = () => (
    <LoginView
      handleSubmit={this.handleSubmit}
      handleUsernameChange={this.handleUsernameChange}
      username={this.state.username}
      invalidLogin={this.state.invalidLogin}
    />
  );
}

LoginContainer.propTypes = {
  myBlogAccountUsernameUpdate: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginContainer);
