import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './EnergyChart.css'; // Import CSS file

const EnergyChart = ({ data }) => {
  console.log('data', data);

  // Display message if intensity and likelihood are both 0
  const showNoDataMessage = data && data.length > 0 && data.every(item => item.intensity === 0 && item.likelihood === 0);

  // Aggregate data by topic
  const aggregatedData = {};
  data.forEach(item => {
    const { topic, intensity, likelihood } = item;
    if (!aggregatedData[topic]) {
      aggregatedData[topic] = {
        topic: topic,
        intensity: intensity,
        likelihood: likelihood
      };
    } else {
      aggregatedData[topic].intensity += intensity;
      aggregatedData[topic].likelihood += likelihood;
    }
  });

  // Convert aggregatedData object back to array with intensity and likelihood as stacked values
  const aggregatedChartData = Object.values(aggregatedData).map(item => ({
    topic: item.topic,
    intensity: item.intensity,
    likelihood: item.likelihood
  }));

  // Default data if data is empty
  if (!data || data.length === 0) {
    aggregatedChartData.push({ topic: 'No Data Available', intensity: 0, likelihood: 0 });
  }

  return (
    <div className="energy-chart-container">
      {showNoDataMessage ? (
        <p>No data available for intensity and likelihood.</p>
      ) : (
        <AreaChart width={600} height={300} data={aggregatedChartData}>
          <XAxis type="category" dataKey="topic" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="intensity" stackId="1" stroke="#8a2be2" fill="#8a2be2" className="area-violet" />
          <Area type="monotone" dataKey="likelihood" stackId="1" stroke="#0D47A1" fill="#0D47A1" className="area-pink" />
        </AreaChart>
      )}
    </div>
  );
};

export default EnergyChart;
