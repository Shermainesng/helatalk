import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const getClass = ({ isActive }) => {
    return isActive ? "hela-nav-link active" : "hela-nav-link";
  };
  return (
    <nav className="navbar navbar-expand-xl border-bottom border-light position-fixed top-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div>
                <Link className="navbar-brand" to="/">
                  hela
                </Link>
              </div>
            </li>
          </ul>
          <div className="navbar-nav">
            <Link className="hela-nav-link" activeclass="active" to="home" spy={true} hashSpy={true} smooth={true} duration={500} href="/#home">
              HOME
            </Link>
            <Link className="hela-nav-link" activeclass="active" to="about" spy={true} hashSpy={true} smooth={true} duration={500} href="/#about">
              ABOUT
            </Link>
            <Link className="hela-nav-link" activeclass="active" to="blog" spy={true} hashSpy={true} smooth={true} duration={500} href="/#blog">
              BLOG
            </Link>
            <Link className="hela-nav-link" activeclass="active" to="events" spy={true} hashSpy={true} smooth={true} duration={500} href="/#events">
              EVENTS
            </Link>
            <NavLink className={getClass} to="/discover">
              DISCOVER
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
