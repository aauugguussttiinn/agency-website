import React, { useContext } from 'react';
import { ThemeContext } from 'Context/ThemeContext';

const ToggleButton = () => {
  const {toggleTheme, theme} = useContext(ThemeContext)
  
  return (
    <div className="toggleWrapper">
      <input onChange={ toggleTheme } type="checkbox" className={theme ? "dn tolight" : "dn todark" } id="dn" checked={ theme } />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default ToggleButton;