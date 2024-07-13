import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './InsightsByCountryChart.css'; // Import CSS file

const InsightsByCountryChart = ({ data }) => {
  // Calculate insights data by country
  const countries = [...new Set(data.map(item => item.country))];
  const insightsData = countries.map(country => {
    return {
      name: country,
      value: data.filter(item => item.country === country).length
    };
  });

  // Filter out countries with empty names and zero value
  const filteredInsightsData = insightsData.filter(item => item.name !== '' && item.value > 0);

  // Determine if there is no data
  const noData = filteredInsightsData.length === 0;

  return (
    <div className="insights-chart-container">
      <h2 style={{ color: '#8a2be2' }}>Insights by Country</h2>
      {noData ? (
        <p style={{ color: '#8a2be2' }}>No data available for insights by country.</p>
      ) : (
        <LineChart width={600} height={300} data={filteredInsightsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8a2be2" /> {/* Violet */}
        </LineChart>
      )}
    </div>
  );
};

export default InsightsByCountryChart;
