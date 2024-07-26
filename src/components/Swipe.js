// Swipe.js
import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import './Swipe.css';

const Swipe = () => {
  const [show, setShow] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollTop > 100) {
        setShow(true);

        const scrollPosition = (scrollTop + clientHeight) / scrollHeight;
        const percentage = Math.min(Math.max(scrollPosition * 100, 0), 100);
        setFillPercentage(percentage);
      } else {
        setShow(false);
        setFillPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    scroller.scrollTo('top', {
      duration: 100,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className={`swipe-container ${show ? 'show' : ''}`}>
      <div className="swipe-fill" style={{ height: `${fillPercentage}%` }}></div>
      <div className="swipe-button" onClick={handleClick}>
        <div className="arrow-up"></div>
      </div>
    </div>
  );
};

export default Swipe;
