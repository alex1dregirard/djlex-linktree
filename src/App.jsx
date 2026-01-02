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
        <LinkButton href="https://www.mixcloud.com/dj_lex_79/">Listen my mixes on Mixcloud</LinkButton>
      </section>
      <Footer />
    </div>
  );
}

export default App;
