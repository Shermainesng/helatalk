import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const getClass = ({ isActive }) => {return isActive ? "hela-nav-link active" : "hela-nav-link"};
  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-bottom border-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <div>
            <Link className="navbar-brand" to="/">hela</Link>
          </div>
          <div className="navbar-nav">
            <NavLink className={getClass} aria-current="page" to="/">HOME</NavLink>
            <NavLink className={getClass} to="/about">ABOUT</NavLink>
            <NavLink className={getClass} to="/blog">BLOG</NavLink>
            <NavLink className={getClass} to="/events">EVENTS</NavLink>
            <NavLink className={getClass} to="/discover">DISCOVER</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
