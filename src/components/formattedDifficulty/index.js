import React from 'react';
import PropTypes from 'prop-types';

/**
 * get the value of difficulty of a recipe and formate it to a human readable version
 * @param {number} value
 */
const FormattedDifficulty = ({ value }) => {
  const difficulties = ['Easy', 'Medium', 'Hard'];
  return <span>{difficulties[value] || '-'}</span>;
};

FormattedDifficulty.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FormattedDifficulty;
