import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './style.module.css';

/**
 * render the Button component
 * @param {string} className
 * @param {string} to
 * @param {function} children - react elements that need to be render inside the box component
 */
const Button = ({ className, to, children }) => (
  <Link to={to} className={`${styles.successButton} ${className}`}>
    {children}
  </Link>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;
