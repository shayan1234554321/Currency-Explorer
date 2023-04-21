import React from 'react';
import PropTypes from 'prop-types';

const HandleDesktop = ({ children }) => (
  <div className="handleDesktop">
    <div className="mobile">{children}</div>
  </div>
);

HandleDesktop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HandleDesktop;
