import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './styles.scss';
MagicColor.propTypes = {};

function MagicColor(props) {
  const { color } = useMagicColor();
  return <div className="magic-color" style={{ backgroundColor: color }}></div>;
}

export default MagicColor;
