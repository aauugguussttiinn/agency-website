import React from 'react';
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
// import Work from "components/Work/Work";
import works from 'data/works';

const Works = () => {

  const shortenTitle = (title) => {
    return title.length > 15 ? title.substring(0, 7) + "..." : title;
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
        <div className="realisations">
          {/* <Switch>
            <Route path="/works/:workSlug" exact component={Work} />
          </Switch> */}
          {works.map((work) => (
            <div className={ work.slug }>
              <Link to={ urlToGet(work.slug) }> { shortenTitle(work.title) } </Link>
            </div>
          ))}          
        </div>
      </div>
    </>

  );
};

export default Works;