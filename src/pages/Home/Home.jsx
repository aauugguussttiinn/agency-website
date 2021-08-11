import React from 'react';
import Navigation from "components/Navigation/Navigation";
import Presentation from "components/Presentation/Presentation";
// import Logo from 'components/Logo/Logo';

const Home = () => {
  return (
    <div className="home">
      {/* <Logo /> */}
      <Navigation />
      <Presentation />
    </div>
  );
};

export default Home;