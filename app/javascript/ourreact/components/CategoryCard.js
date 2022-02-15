import React from "react";
import { Link, Outlet } from "react-router-dom";

function CategoryCard(props) {

  return (
    <div className="transparent-card text-decoration-none category-card">
      <Link to={`/blog/${props.name}`} className="text-decoration-none">
        <img src="placeholder.png" className="card-img-top category-img" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title font-anton font-white">{props.name}</h5>
          <p className="card-text font-white font-body fs-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

export default CategoryCard;
