import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false
};

function Button({ children, type, version, isDisabled, onClick }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
