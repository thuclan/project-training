/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Button = (props) => (
  <button
    type="button"
    className={props.className}
    onClick={props.onClick ? () => props.onClick() : null}
  >
    {props.children}
  </button>
);
export default Button;
