import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <div className="container">
      Schmiedeweg 2 • 31542 Bad Nenndorf • Tel.: 05723 – 74 99 99 - 9 • Fax:
      05723 - 74 99 99 - 8<br />
      plan Hc 2018 - Büro für Stadtplanung • www.planhc.de •{' '}
      <Link to="/impressum">Impressum</Link>
    </div>
  </footer>
);

export default Footer;
