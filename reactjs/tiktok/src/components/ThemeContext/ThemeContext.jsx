import React, { useState } from 'react';
import { createContext } from 'react';

export const themeContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState('dark');
  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = {
    theme,
    handleClick,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

export default ThemeContext;
