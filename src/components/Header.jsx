import React from 'react';

const Header = () => {
  const headerStyle = {
    height: '100vh', // Full-screen height
    backgroundImage: 'url("/logo-lex-vinyl.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
  };

  const gradientOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <header style={headerStyle}>
      <div style={gradientOverlay}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>dj lex</h1>
        <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>
          🎧 Ambiance & énergie garantie <br />
          Sets Afro / Groove / Club & Culture
        </p>
      </div>
    </header>
  );
};

export default Header;
