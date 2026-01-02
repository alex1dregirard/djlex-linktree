import React from 'react';

const Footer = () => (
  <footer className="footer">
    <a href="#" onClick={(e)=> e.preventDefault()}>Report</a>
    <span className="sep">•</span>
    <a href="#" onClick={(e)=> e.preventDefault()}>Privacy</a>
  </footer>
);

export default Footer;
