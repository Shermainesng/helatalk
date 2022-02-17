import React from "react";
import { Link, Outlet } from "react-router-dom";

function CategoryCard(props) {

  return (
    <div className="transparent-card text-decoration-none category-card">
      <Link to={`/blogs/${props.name.replace(/[\W\d]/,"")}`} className="text-decoration-none">
        <img src={props.img} className="card-img-top category-img" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title font-anton font-white">{props.name}</h5>
          <p className="card-text font-white px-5">{props.description}</p>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

export default CategoryCard;
