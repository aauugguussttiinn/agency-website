import React from 'react';
import { Link } from "react-router-dom";

const Card = ({name, description, slug}) => {
  
  const shortenText = (content) => {
    return content.length > 15 ? content.substring(0, 7) + "..." : content;
  }

  const urlToGet = (workslug) => {
    return "/works/" + workslug
  }
  
  return (
    <div class="card text-center col-3 p-0" styles="width: 18rem;">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title"> { name } </h5>
        <p class="card-text"> { shortenText(description) } </p>
        <Link to={ urlToGet(slug) }> Discover </Link>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  );
};

export default Card;