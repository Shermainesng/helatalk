import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {

  return (
    // <Link>
    <div className="transparent-card border-right w-50 px-4 mx-2">
        <img src="placeholder.png" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title font-anton font-white">{props.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    // </Link>

  );
}

export default CategoryCard;
