import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
ColorBox.propTypes = {};

function getRandomColor() {
  const arr = ['green', 'yellow', 'blue', 'orange'];
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function ColorBox(props) {
  const [color, setColor] = React.useState(() => {
    const initColor = localStorage.getItem('color_item') || 'pink';
    return initColor;
  });

  function handleClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('color_item', newColor);
  }

  return (
    <div
      className="colorbox"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox;
