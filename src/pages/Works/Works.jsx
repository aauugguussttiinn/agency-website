import React from 'react';
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
// import Work from "components/Work/Work";
import works from 'data/works';

const Works = () => {

  const shortenText = (content) => {
    return content.length > 15 ? content.substring(0, 7) + "..." : content;
  }

  const urlToGet = (workslug) => {
    return "/works/" + workslug
  }

  return (
    <>
      <Header />
      <div className="works">
        <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
        <p>
          Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
        </p>
        {/* <div className="realisations row d-flex justify-content-around py-3">
          {works.map((work) => (
            <div className={ work.slug }>
              <div class="card text-center">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title"> { work.name } </h5>
                  <p class="card-text"> { shortenText(work.description) } </p>
                  <Link to={ urlToGet(work.slug) }> Discover </Link>
                </div>
                <div class="card-footer text-muted">
                  2 days ago
                </div>
              </div>
            </div>
          ))} */}
          {works.map((work) => (
            <div className={ work.slug }>
              <Link to={ urlToGet(work.slug) }> { work.name } </Link>
            </div>
          ))}    
        </div>
      </div>
    </>

  );
};

export default Works;