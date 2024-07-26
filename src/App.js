// App.js
import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome'; // Assuming Welcome.js is in the components folder
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Geovisual from './components/Geovisual';
import Swipe from './components/Swipe';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <Welcome onAnimationComplete={handleWelcomeComplete} />}
      <div style={{ visibility: showWelcome ? 'hidden' : 'visible' }}>
        <Navbar />
        <Slider />
        <Geovisual />
        <Footer />
        <Swipe />
      </div>
    </>
  );
};

export default App;