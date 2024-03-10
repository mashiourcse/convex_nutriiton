import React, { useState } from 'react';

const Navbar = () => {
  // State to manage active navbar item
  const [activeNavItem, setActiveNavItem] = useState('');

  // Function to handle navbar item click
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Convex</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeNavItem === 'home' ? 'active' : ''}`}>
              <a className="nav-link" href="/" onClick={() => handleNavItemClick('home')}>Home</a>
            </li>
            <li className={`nav-item ${activeNavItem === 'recommendation-system' ? 'active' : ''}`}>
              <a className="nav-link" href="/recommendation-system" onClick={() => handleNavItemClick('recommendation-system')}>Recommendation System</a>
            </li>
            <li className={`nav-item ${activeNavItem === 'about' ? 'active' : ''}`}>
              <a className="nav-link" href="/about" onClick={() => handleNavItemClick('about')}>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
