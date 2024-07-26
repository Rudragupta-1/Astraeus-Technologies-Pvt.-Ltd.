import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import ConclusionSummary from './ConclusionSummary'; 
// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Geopolitical data sample
const geopoliticalData = [
  { country: 'USA', population: 331, gdp: 21137518 },
  { country: 'China', population: 1441, gdp: 14140163 },
  { country: 'India', population: 1393, gdp: 2875142 },
  { country: 'Russia', population: 146, gdp: 1699876 },
  { country: 'Brazil', population: 214, gdp: 1444731 },
];

// Bar chart configuration
const barData = {
  labels: geopoliticalData.map((item) => item.country),
  datasets: [
    {
      label: 'Population (in millions)',
      data: geopoliticalData.map((item) => item.population),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  animation: {
    duration: 2000, // Animation duration in milliseconds
  },
};

// Pie chart configuration
const pieData = {
  labels: geopoliticalData.map((item) => item.country),
  datasets: [
    {
      label: 'GDP (in billions USD)',
      data: geopoliticalData.map((item) => item.gdp),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Geovisual() {
  const barRef = useRef(null);
  const pieRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const barElement = barRef.current;
      const pieElement = pieRef.current;
      const windowHeight = window.innerHeight;
      
      if (barElement) {
        const barPosition = barElement.getBoundingClientRect().top;
        if (barPosition < windowHeight) {
          barElement.classList.add('animate');
        }
      }

      if (pieElement) {
        const piePosition = pieElement.getBoundingClientRect().top;
        if (piePosition < windowHeight) {
          pieElement.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="geovisual-container">
      <h2>Geopolitical Data Visualization</h2>
      <div ref={barRef} className="chart-container">
        <h3>Population by Country</h3>
        <Bar data={barData} options={barOptions} />
      </div>
      <div ref={pieRef} className="chart-container-1">
        <h3>GDP by Country</h3>
        <Pie data={pieData} />
      </div>
      <ConclusionSummary data={geopoliticalData} />
    </div>
  );
}

export default Geovisual;
