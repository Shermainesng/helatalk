import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-bottom border-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">hela</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav nav-pills">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/blog">Blog</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/events">Events</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/discover">Discover</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
