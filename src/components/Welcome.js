// Welcome.js
import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 3000); // Start raising curtain after 3 seconds
    const timer2 = setTimeout(() => setAnimationStage(2), 1000); // Start fading out after 6 seconds
    const timer3 = setTimeout(() => {
      setAnimationStage(3);
      if (onAnimationComplete) onAnimationComplete();
    }, 8000); // Complete animation and notify parent after 8 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  return (
    <div className={`welcome-container stage-${animationStage}`}>
      <div className="curtain">
        <div className="curtain-content">
          <h1>Welcome to Astraeus Technologies</h1>
          <h2>Geopolitics Visualization</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;