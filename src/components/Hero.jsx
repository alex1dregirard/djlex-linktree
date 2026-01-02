import React from 'react';
import InstagramLink from './InstagramLink';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="title">dj lex</h1>
        <p className="subtitle">
          <span className="emoji">🎧</span>
          {' '}NOUVEAU MIX DISPONIBLE{' '}
          <span className="emoji">🎧</span>
        </p>
        <div className="subtitle subtitle--small">
          Style : House / pop / commercial<br />
          Ambiance : Opening - Années 90 / 2000<br />
          Link : <a href="https://www.mixcloud.com/dj_lex_79/mix-end-1990-2000-house-pop/" target="_blank" rel="noopener noreferrer">Mixcloud</a>
        </div>
        <InstagramLink />
      </div>
    </section>
  );
};

export default Hero;
