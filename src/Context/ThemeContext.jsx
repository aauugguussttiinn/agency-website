import React, {createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  // const [theme, setTheme] = useState(false);
  // const [theme, setTheme] = useState(localStorage.getItem(`theme`));
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) || false );

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  useEffect(
    () => {
      localStorage.setItem('theme', theme);
    },
    [toggleTheme, theme]
  );
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;