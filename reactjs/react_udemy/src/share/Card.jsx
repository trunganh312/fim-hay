import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  reverse: false
};

function Card({ children, reverse }) {
  return <div className={`card  ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
