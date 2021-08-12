import React, {createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const stringStorageToBoolean = (stringedValue) => {
    if (stringedValue === 'true') {
      return true;
    } else {
      return false;
    };
  }

  const [theme, setTheme] = useState(stringStorageToBoolean(localStorage.getItem(`theme`)) || false );



  const toggleTheme = () => {
    setTheme(!theme);
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