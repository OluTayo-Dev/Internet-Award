import React, { useState } from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">Internet Awards</div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <div className="dropdown">
    <a href="#categories" className="dropdown-toggle">
      Categories ▾
    </a>
    <div className="dropdown-menu">
      <a href="#best-tech">Best Tech Influencer</a>
      <a href="#innovative-startup">Most Innovative Startup</a>
      <a href="#content-creator">Top Content Creator</a>
    </div>
  </div>
  <a href="#nominees">Nominees</a>
  <a href="#vote">Vote</a>
  <a href="#contact">Contact</a>
</div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        &#9776;
      </div>
    </header>
  );
};

export default Navbar;
