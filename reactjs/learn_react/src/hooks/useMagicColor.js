import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
  const arrColors = ['green', 'yellow', 'orange', 'black', 'white'];
  const currentIndex = arrColors.indexOf(currentColor);
  let randomIdx = currentIndex;
  while (currentIndex === randomIdx) {
    randomIdx = Math.trunc(Math.random() * arrColors.length);
  }
  console.log(randomIdx);
  return arrColors[randomIdx];
}

function useMagicColor() {
  const [color, setColor] = useState('green');
  const colorRef = useRef('green');
  useEffect(() => {
    const id = setInterval(() => {
      const random = randomColor(colorRef.current);
      setColor(random);
      colorRef.current = random;
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return { color };
}

export default useMagicColor;
