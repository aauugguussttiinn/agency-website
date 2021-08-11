import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {


  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;

// const ThemeContextProvider = (props) => {


//   const [theme, setTheme] = useState(localStorage.getItem(`theme`) || false );

//   const toggleTheme = () => {
//     setTheme(!theme);
//     console.log(theme);
//     localStorage.setItem('theme', theme);
//   };
  
//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       {props.children}
//     </ThemeContext.Provider>
//   )
// };

// export default ThemeContextProvider;