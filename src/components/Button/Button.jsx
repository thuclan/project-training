/* eslint-disable react/button-has-type */
import React from 'react';
import './button.css';

const Button = ({ className, children, ...props }) => (
  <button {...props} className={`btns ${className}`}>
    {children}
  </button>
);

export default Button;
