import React from 'react';
import Navigation from "components/Navigation/Navigation";
import ToggleButton from 'components/ToggleButton/ToggleButton';
// import { ThemeContext } from "Context/ThemeContext";

const Header = () => {
  // const {theme} = useContext(ThemeContext);

  return (
    // <div className={ theme ? "maintheme tolight" : "maintheme todark" }>
      <div className="header d-flex justify-content-between px-3">
        <Navigation />
        <ToggleButton />
      </div>
    // </div>
  );
};

export default Header;