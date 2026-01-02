import React from 'react';
import Hero from './components/Hero';
import LinkButton from './components/LinkButton';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="frame">
      <Hero />
      <section className="links">
        <LinkButton href="https://instagram.com/dj.lex.music.79">Instagram</LinkButton>
        <LinkButton href="https://www.mixcloud.com/">Listen my mixes on Mixcloud</LinkButton>
      </section>
      <JoinCTA />
      <Footer />
    </div>
  );
}

export default App;
