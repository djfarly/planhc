import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          planHc · Büro für Stadtplanung
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
