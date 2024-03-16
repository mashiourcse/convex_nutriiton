import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbarCollapsed(true);
  };

  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to={"/"}>
          Convex
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setNavbarCollapsed(!navbarCollapsed)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            navbarCollapsed ? "" : "show"
          }`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li
              className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}
            >
              {/* <Link to={"/"}>Home</Link> */}
              <Link
                className='nav-link'
                to={"/"}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "recommendation-system" ? "active" : ""
              }`}
            >
              <Link
                className='nav-link'
                to={"/recommendation-system"}
                onClick={() => handleNavItemClick("recommendation-system")}
              >
                Recommendation System
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "about" ? "active" : ""
              }`}
            >
              <Link
                className='nav-link'
                to={"/about"}
                onClick={() => handleNavItemClick("about")}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
