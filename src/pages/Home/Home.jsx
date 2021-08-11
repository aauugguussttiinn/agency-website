import React from 'react';
import Header from "components/Header/Header";
import Presentation from "components/Presentation/Presentation";
// import Logo from 'components/Logo/Logo';

const Home = () => {
  return (
    <div className="home">
      {/* <Logo /> */}
      <Header />
      <Presentation />
    </div>
  );
};

export default Home;