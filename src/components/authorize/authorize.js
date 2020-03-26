// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { myBlogAccountIsUserLoggedIn } from '../../modules/my-blog-account';

export default (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    isUserLoggedIn: myBlogAccountIsUserLoggedIn(state)
  });

  class Authorize extends React.Component {
    redirectUserToLoginPage = () => {
      const { history = {}} = this.props;
      history.push('/');
    }

    componentDidMount = () => {
      if (!this.props.isUserLoggedIn) {
        this.redirectUserToLoginPage();
      }
    }

    componentDidUpdate = (prevProps) => {
      // Redirect user to login page if the user was logged in, but now is not.
      if (prevProps.isUserLoggedIn && !this.props.isUserLoggedIn) {
        this.redirectUserToLoginPage();
      }
    }

    render = () => (
      <WrappedComponent {...this.props} />
    );
  }

  Authorize.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  return connect(mapStateToProps)(Authorize);
}