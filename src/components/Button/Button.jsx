/* eslint-disable react/button-has-type */
import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = ({ className, children, ...props }) => (
  <button {...props} className={`btns ${className}`}>
    {children}
  </button>
);
Button.propTypes = {
  type: PropTypes.arrayOf(['submit', 'button', 'reset']),
};
export default Button;
