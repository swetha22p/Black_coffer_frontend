// src/components/SummaryStats.js
import React from 'react';
import './SummaryStats.css';

const TotalCountries = ({ data }) => {
    console.log('sum',data)
  const totalInsights = data.length;
  const averageIntensity = (data.reduce((sum, item) => sum + item.intensity, 0) / totalInsights).toFixed(2);
  const averageLikelihood = (data.reduce((sum, item) => sum + item.likelihood, 0) / totalInsights).toFixed(2);
  const totalCountries = new Set(data.map(item => item.country)).size;

  return (
    <div className="summary-stats-container">
      
      <div className="stat-item">
      <center>  <h2>Total Countries</h2></center>
      <center>  <p>{totalCountries}</p></center>
      </div>
    </div>
  );
};

export default TotalCountries;
