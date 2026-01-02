import React from 'react';
import Hero from '../components/Hero';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="frame">
    <Hero />
    <section className="links">
      <LinkButton href="https://www.mixcloud.com/dj_lex_79/">Écouter mes mixes sur Mixcloud</LinkButton>
      {/* <Link to="/gallery" className="link-btn" style={{ textDecoration: 'none' }}>
        Galerie Photos
        <span className="dots">⋮</span>
      </Link> */}
      {/* <Link to="/about" className="link-btn" style={{ textDecoration: 'none' }}>
        À propos
        <span className="dots">⋮</span>
      </Link> */}
      <Link to="/booking" className="link-btn" style={{ textDecoration: 'none' }}>
        Prestations / Contact
        <span className="dots">⋮</span>
      </Link>
    </section>
    <Footer />
  </div>
);

export default Home;
