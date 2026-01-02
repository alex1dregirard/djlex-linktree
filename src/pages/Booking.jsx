import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Booking = () => (
  <div className="frame">
    <section className="links" style={{ paddingTop: 24 }}>
      <h2 className="title" style={{ fontSize: 28, marginBottom: 12 }}>Réservations / Contact</h2>
      <p className="subtitle--small">Pour réserver DJ Lex, envoyez un email à <a href="mailto:dj.lex.music.79@gmail.com">dj.lex.music.79@gmail.com</a> ou un DM Instagram.</p>
      <div style={{ marginTop: 16 }}>
        <Link to="/" className="link-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Retour à l'accueil&nbsp;
          <span className="dots">⋮</span>
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default Booking;
