import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet titleTemplate="planHc — %s — Büro für Stadtplanung" />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default TemplateWrapper;
