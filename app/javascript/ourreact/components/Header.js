import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-background px-3 sticky-top navbar-custom">
      <div className="container-fluid">
        <div className="brand-logo">
          <Link class="navbar-brand" to="/">
            hela
          </Link>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navbar-cats navbar-cats-custom justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/">
                HOME <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/about">
                ABOUT
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to="/blogs">
                BLOGS
              </NavLink>
            </li>
            <li class="nav-item">
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
      </div>
    </nav>
  );
}

export default Header;
