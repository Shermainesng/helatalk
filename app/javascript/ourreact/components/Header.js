import React, { useEffect } from "react";
// import { navLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between px-5 py-3 border-bottom border-light fixed-top">
      <div className="brand-logo">
        <Link className="navbar-brand" to="/">
          hela
        </Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse hela-navbar-cats" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="hela-nav-link" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link className="hela-nav-link" to="/about"> */}
            <Link className="hela-nav-link" to="/about" spy={true} hashSpy={true} smooth={true} duration={500}></Link>
            ABOUT
            {/* </Link> */}
          </li>
          <li className="nav-item">
            <Link className="hela-nav-link" to="/blogs">
              BLOGS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="hela-nav-link" to="/discover">
              DISCOVER
            </Link>
          </li>
          <li className="nav-item">
            <Link className="hela-nav-link" to="/events">
              EVENTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
