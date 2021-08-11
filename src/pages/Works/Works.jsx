import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Header from "components/Header/Header";
import Work from "components/Work/Work";
import works from 'data/works';

const Works = () => {
  return (
    <>
      <Header />
      <div className="works">
        <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
        <p>
          Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
        </p>
        <div className="realisations">
          {works.map((work) => (
            <Work />
          ))}          
        </div>
      </div>
    </>

  );
};

export default Works;