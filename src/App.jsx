import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Booking from './pages/Booking';
import { useEffect } from 'react';
import { initGA, logPageView } from './pages/analytics';

function App() {
  useEffect(() => {
    initGA("GTM-5DLHX4CM"); // Replace with your tracking ID
  }, []);

  const TrackPageView = () => {
    const location = useLocation();
    useEffect(() => {
      logPageView();
    }, [location]);

    return null;
  };

  return (
    <BrowserRouter>
      <TrackPageView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
