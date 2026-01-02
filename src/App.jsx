import React from 'react';
import Hero from './components/Hero';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="frame">
      <Hero />
      <section className="links">
        <LinkButton href="https://www.mixcloud.com/dj_lex_79/mix-end-1990-2000-house-pop/">Mixcloud end 1990-2000 house & pop</LinkButton>
        {/* <LinkButton href="https://www.mixcloud.com/dj_lex_79/">Écouter mes mixes sur Mixcloud</LinkButton> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
