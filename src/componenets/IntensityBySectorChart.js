import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './IntensityBySectorChart.css'; // Import CSS file

const COLORS = ['#8a2be2', '#0D47A1', '#FFBB28', '#FF8042']; // Updated COLORS array with violet and pink

const IntensityBySectorChart = ({ data }) => {
  let intensityData = [];

  if (data && data.length > 0) {
    const sectors = [...new Set(data.map(item => item.sector))];
    intensityData = sectors.map(sector => {
      return {
        name: sector,
        value: data.filter(item => item.sector === sector).reduce((sum, item) => sum + item.intensity, 0)
      };
    });
  } else {
    intensityData = [{ name: 'No Data Available', value: 0 }];
  }

  return (
    <div className="intensity-chart-container">
      <h2 style={{ color: '#8a2be2',textAlign: 'center' }}>Intensity by Sector</h2>
      {data && data.length === 0 ? (
        <p style={{ color: '#8a2be2' }}>No data available for intensity by sector.</p>
      ) : (
        <PieChart width={400} height={400}>
          <Pie dataKey="value" data={intensityData} cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
            {intensityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default IntensityBySectorChart;
