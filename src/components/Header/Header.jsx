import React from 'react';
import Navigation from "components/Navigation/Navigation";
import ToggleButton from 'components/ToggleButton/ToggleButton';

const Header = () => {

  return (
      <div className="header d-flex justify-content-between px-3">
        <Navigation />
        <ToggleButton />
      </div>
  );
};

export default Header;