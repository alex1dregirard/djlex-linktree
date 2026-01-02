import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const images = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
  '/gallery/photo5.jpg',
  '/gallery/photo6.jpg',
];

const Gallery = () => (
  <div className="frame">
    <section className="links" style={{ paddingTop: 24 }}>
      <h2 className="title" style={{ fontSize: 28, marginBottom: 12 }}>Galerie Photos</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-card">
            <img src={src} alt={`Gallery ${i+1}`} loading="lazy"/>
          </div>
        ))}
      </div>
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

export default Gallery;
