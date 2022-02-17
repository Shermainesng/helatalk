import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between px-5 py-3 border-bottom border-light sticky-top">
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
            <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/">
              HOME <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/blogs">
              BLOGS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/discover">
              DISCOVER
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/events">
              EVENTS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
