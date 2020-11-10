import React from 'react';
import PropTypes from 'prop-types';

/**
 * get the value of time of a recipe and formate it to a human readable version
 * @param {string} value
 */
const FormattedTime = ({ value }) => {
  const minutes = value.match(/\d+/g)
    ? parseInt(value.match(/\d+/g)[0], 10)
    : 0;
  const formattedTime =
    minutes < 2 ? `${minutes} minute` : `${minutes} minutes`;
  return <span>{formattedTime}</span>;
};

FormattedTime.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FormattedTime;
