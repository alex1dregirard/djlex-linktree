import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="frame">
    <section className="links" style={{ paddingTop: 24 }}>
      <h2 className="title" style={{ fontSize: 28, marginBottom: 12 }}>À propos</h2>
      <p className="subtitle--small">
        DJ Lex — Ambiance & énergie garantie. Afro, Groove, Club & Culture.
        Disponible pour soirées privées, clubs, et événements.
      </p>
      <div style={{ marginTop: 16 }}>
        <Link to="/" className="link-btn" style={{ textDecoration: 'none' }}>
          Retour à l'accueil
          <span className="dots">⋮</span>
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
