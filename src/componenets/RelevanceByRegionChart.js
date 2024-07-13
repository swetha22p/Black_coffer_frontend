import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './RelevanceByRegionChart.css'; // Import CSS file for styling

const RelevanceByRegionChart = ({ data }) => {
  // Calculate relevance data by region
  const regions = [...new Set(data.map(item => item.region))];
  const relevanceData = regions.map(region => {
    return {
      region: region,
      relevance: data.filter(item => item.region === region).reduce((sum, item) => sum + item.relevance, 0)
    };
  });

  // Determine if there is no data
  const noData = relevanceData.length === 0;

  return (
    <div className="relevance-chart-container">
      <h2 style={{ color: '#8a2be2' }}>Relevance by Region</h2>
      {noData ? (
        <p style={{ color: '#8a2be2' }}>No data available for relevance by region.</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={150} data={relevanceData}>
            <PolarGrid />
            <Tooltip />
            <Radar name="Relevance" dataKey="relevance" stroke="#8a2be2" fill="#8a2be2" fillOpacity={0.6} />
            <PolarAngleAxis dataKey="region" />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default RelevanceByRegionChart;
