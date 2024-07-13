import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ImpactVsLikelihoodChart.css'; // Import CSS file

const ImpactVsLikelihoodChart = ({ data }) => {
  // Determine if there is no data
  const noData = !data || data.length === 0;

  return (
    <div className="impact-chart-container">
      <h2 style={{ color: '#8a2be2' , textAlign: 'center'}}>Impact vs Likelihood</h2>
      {noData ? (
        <p style={{ color: '#8a2be2' }}>No data available for impact vs likelihood.</p>
      ) : (
        <ScatterChart width={600} height={400}>
          <CartesianGrid />
          <XAxis type="number" dataKey="likelihood" name="Likelihood" />
          <YAxis type="number" dataKey="impact" name="Impact" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Insights" data={data} fill="#8a2be2" />
        </ScatterChart>
      )}
    </div>
  );
};

export default ImpactVsLikelihoodChart;
