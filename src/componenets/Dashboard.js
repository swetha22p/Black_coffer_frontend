import React, { useState } from 'react';
import './Dashboard.css';
import EnergyChart from './EnergyChart';
import Filters from './Filters';
import IntensityBySectorChart from './IntensityBySectorChart';
import ImpactVsLikelihoodChart from './ImpactVsLikelihoodChart';
import RelevanceByRegionChart from './RelevanceByRegionChart';
import InsightsByCountryChart from './InsightsByCountryChart';
import TopicsFrequencyChart from './TopicsFrequencyChart';
import TotalInsightsCount from './TotalInsigthscount';
import TotalCountries from './Totalcountriescount';
import YearChart from './Year';

const Dashboard = () => {
  const [data, setData] = useState([]);

  // Function to fetch data based on filters
  const fetchData = (sector, region) => {
    let query = '';
    if (sector !== 'All') query += `sector=${sector}&`;
    if (region !== 'All') query += `region=${region}&`;

    fetch(`https://black-coffer-backend-k2uh.onrender.com/api/data?${query}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Callback function when filters change
  const handleFilterChange = (sector, region) => {
    fetchData(sector, region);
  };

  return (
    <div className="dashboard-container">
      <center><h1>Energy Insights Dashboard</h1></center>
      <Filters onFilterChange={handleFilterChange} />
      <div className="dashboard-charts">
        <div className="chart-row">
         
          <div className="chart-card">
            <RelevanceByRegionChart data={data} />
          </div>
         
          <div className="chart-card-col">
            <EnergyChart data={data} />
          </div>
          <div className="chart-card-small">
            <TotalInsightsCount data={data} />
          </div>
          <div className="chart-card-small1">
            <TotalCountries data={data} />
          </div>
          
          <div className="chart-card">
            <IntensityBySectorChart data={data} />
          </div>
          
        </div>
        <div className="chart-row">
          <div className="chart-card-wide">
            <InsightsByCountryChart data={data} />
          </div>
          <div className="chart-card">
            <TopicsFrequencyChart data={data} />
          </div>
          <div className="chart-card-wide">
            <ImpactVsLikelihoodChart data={data} />
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
