import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="title">dj lex</h1>
        <p className="subtitle">
          <span className="emoji">🎧</span>
          Ambiance & énergie garantie
        </p>
        <p className="subtitle">Sets Afro / Groove / Club & Culture</p>
        <div className="ig-badge" aria-label="instagram">⌂</div>
      </div>
    </section>
  );
};

export default Hero;
