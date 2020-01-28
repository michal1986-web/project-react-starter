import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
