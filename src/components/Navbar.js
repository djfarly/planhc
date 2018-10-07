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
        <Link className="navbar-item" to="/leistungen">
          Leistungen
        </Link>
        <Link className="navbar-item" to="/projekte">
          Projekte
        </Link>
        <Link className="navbar-item" to="/büro-kontakt">
          Büro / Kontakt
        </Link>
        <Link className="navbar-item" to="/persönliches">
          Persönliches
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;