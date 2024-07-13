import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TopicsFrequencyChart.css'; // Import CSS file for styling

const COLORS = ['#8a2be2', '#0D47A1', '#FFBB28', '#FF8042']; // Updated COLORS array with violet and blue

const TopicsFrequencyChart = ({ data }) => {
  // Filter out entries where name is empty
  const filteredTopicsData = data.filter(item => item.topic.trim() !== '');

  // Prepare data for charting
  const topics = [...new Set(filteredTopicsData.map(item => item.topic))];
  const topicsData = topics.map((topic, index) => {
    return {
      name: topic,
      value: filteredTopicsData.filter(item => item.topic === topic).length,
      index: index
    };
  });

  // Check if there is no data
  const noData = topicsData.length === 0;

  return (
    <div className="topics-chart-container">
     <center> <h1>Topics</h1> </center>
      {noData ? (
        <p style={{ color: '#8a2be2', textAlign: 'center' }}>No data available for topics frequency.</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={topicsData}>
            <XAxis dataKey="name" />
            <YAxis type="number" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={COLORS[0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TopicsFrequencyChart;
