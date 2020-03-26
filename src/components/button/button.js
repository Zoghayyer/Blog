// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, theme, size, className, type, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn btn-${theme} btn-${size} ${className}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: ''
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string
};

export default Button;