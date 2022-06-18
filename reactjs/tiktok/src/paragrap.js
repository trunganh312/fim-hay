import React, { useContext } from 'react';
import { themeContext } from './components/ThemeContext/ThemeContext';

function Paragrap() {
  const context = useContext(themeContext);
  console.log(context);
  return (
    <p className={context.theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit
      consectetur saepe! Molestias ipsum quaerat explicabo vero nostrum aperiam
      soluta sequi commodi omnis enim. Fuga facilis reprehenderit laudantium
      delectus at.
    </p>
  );
}

export default Paragrap;
