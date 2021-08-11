import React, {createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  // const [theme, setTheme] = useState(false);
  // const [theme, setTheme] = useState(localStorage.getItem(`theme`));
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) || false );

  const toggleTheme = () => {
    // localStorage.setItem('theme', theme);
    setTheme(!theme);
    console.log(theme);
    // localStorage.setItem('theme', theme);
  };

  useEffect(
    () => {
      localStorage.setItem('theme', theme);
    },
    [toggleTheme]
  );
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;