import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {

  const getClass = ({ isActive }) => {return isActive ? "hela-nav-link active" : "hela-nav-link"};
  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-bottom border-light position-fixed top-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <div>
            <Link className="navbar-brand" to="/">hela</Link>
          </div>
          <div className="navbar-nav">
            <Link className="hela-nav-link" activeClass="active" to="home" spy={true} smooth={true} duration={500} >HOME</Link>
            <Link className="hela-nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={500} >ABOUT</Link>
            <Link className="hela-nav-link" activeClass="active" to="blog" spy={true} smooth={true} duration={500} >BLOG</Link>
            <Link className="hela-nav-link" activeClass="active" to="events" spy={true} smooth={true} duration={500} >EVENTS</Link>
            <NavLink className={getClass} to="/discover">DISCOVER</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
