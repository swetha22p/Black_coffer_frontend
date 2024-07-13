import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const YearChart = ({ selectedYearData }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (selectedYearData && selectedYearData.length > 0) {
      const labels = selectedYearData.map(data => data.end_year);
      const dataValues = selectedYearData.map(data => data.intensity);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Intensity',
            data: dataValues,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
          },
        ],
      });
    }
  }, [selectedYearData]);

  if (!selectedYearData || selectedYearData.length === 0) {
    return <div>No data available for the selected year.</div>;
  }

  return (
    <div>
      <h2>Intensity Chart by Year</h2>
      <Line data={chartData} />
    </div>
  );
};

export default YearChart;
