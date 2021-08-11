import React from 'react';
import Header from "components/Header/Header";
import Presentation from "components/Presentation/Presentation";
// import Logo from 'components/Logo/Logo';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        {/* <Logo /> */}
        <Presentation />
      </div>
    </>

  );
};

export default Home;