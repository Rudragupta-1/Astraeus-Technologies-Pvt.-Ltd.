// ConclusionSummary.jsx
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const generateSummary = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return 'No data available to generate a summary.';
  }

  const totalPopulation = data.reduce((acc, curr) => acc + curr.population, 0);
  const averageGDP = data.reduce((acc, curr) => acc + curr.gdp, 0) / data.length;
  const highestGDP = Math.max(...data.map(item => item.gdp));
  const highestGDPCountry = data.find(item => item.gdp === highestGDP)?.country || 'N/A';

  return `The total population across the listed countries is ${totalPopulation} million. 
          The average GDP is ${averageGDP.toFixed(2)} billion USD. 
          The highest GDP recorded is by ${highestGDPCountry} with ${highestGDP} billion USD.`;
};

const ConclusionSummary = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const summaryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (summaryRef.current) {
        const rect = summaryRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const summary = generateSummary(data);

  return (
    <div
      ref={summaryRef}
      className={`conclusion-summary ${isVisible ? 'animate' : 'hidden'}`}
    >
      <h2>Conclusion Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

ConclusionSummary.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      gdp: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ConclusionSummary;