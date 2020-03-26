// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import Button from '../../components/button';

const LoginView = ({ handleSubmit, handleUsernameChange, username, invalidLogin }) => (
  <div className="row d-flex justify-content-center">
    <div
      id="login-form"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className={`form-control button-input-dimension ${invalidLogin ? 'border-danger' : ''}`}
              placeholder="Type your username..."
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          {
            invalidLogin &&
              <div className="text-danger invalid-user">Only letters and numbers are allowed.</div>
          }
        </div>
        <div>
        <Button
          type="submit"
          theme="danger"
          className="button-input-dimension"
        >
          <span>Welcome to my blog!</span>
        </Button>
        </div>
      </form>
    </div>
  </div>
);

LoginView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  invalidLogin: PropTypes.bool.isRequired
};

export default LoginView;