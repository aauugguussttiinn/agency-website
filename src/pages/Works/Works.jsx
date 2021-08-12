import React from 'react';
import Header from "components/Header/Header";
import Card from "components/Card/Card";
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
        <div className="realisations row d-flex justify-content-around py-3">
          {works.map((work) => (
            <Card name={ work.name } description={ work.description } slug={ work.slug } key={ work.slug } />
          ))}
          {/* {works.map((work) => (
            <div className={ work.slug }>
              <Link to={ urlToGet(work.slug) }> { work.name } </Link>
            </div>
          ))}     */}
        </div>
      </div>
    </>

  );
};

export default Works;