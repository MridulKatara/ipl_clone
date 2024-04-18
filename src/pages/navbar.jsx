import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/score">Score</Link></li>
        <li><Link to="/highlights">Highlights</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/fantasy">Fantasy</Link></li>
        <li><Link to="/contact">Contact-us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
