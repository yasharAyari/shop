import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

/**
 * render the box wrapper component
 * @param {string} className
 * @param {function} children - react elements that need to be render inside the box component
 */
const Box = ({ className, children }) => (
  <div className={`${styles.box} ${className}`}>{children}</div>
);

Box.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Box;
