import React, { useState, useEffect } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  const [sectors, setSectors] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [endYears, setEndYears] = useState([]);
  const [selectedEndYear, setSelectedEndYear] = useState('All');
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [PESTs, setPESTs] = useState([]);
  const [selectedPEST, setSelectedPEST] = useState('All');
  const [sources, setSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState('All');
  const [SWOTs, setSWOTs] = useState([]);
  const [selectedSWOT, setSelectedSWOT] = useState('All');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('All');

  useEffect(() => {
    fetch('https://black-coffer-backend-k2uh.onrender.com/api/filters')
      .then(response => response.json())
      .then(data => {
        setSectors(data.sectors);
        setRegions(data.regions);
        setEndYears(data.end_years);
        setTopics(data.topics);
        setPESTs(data.pests);
        setSources(data.sources);
        setSWOTs(data.swots);
        setCountries(data.countries);
        setCities(data.cities);
      })
      .catch(error => console.error('Error fetching filters:', error));
  }, []);

  const handleSectorChange = event => {
    setSelectedSector(event.target.value);
    onFilterChange(event.target.value, selectedRegion, selectedEndYear, selectedTopic, selectedPEST, selectedSource, selectedSWOT, selectedCountry, selectedCity);
  };

  const handleRegionChange = event => {
    setSelectedRegion(event.target.value);
    onFilterChange(selectedSector, event.target.value, selectedEndYear, selectedTopic, selectedPEST, selectedSource, selectedSWOT, selectedCountry, selectedCity);
  };

  const handleEndYearChange = event => {
    setSelectedEndYear(event.target.value);
    onFilterChange(selectedSector, selectedRegion, event.target.value, selectedTopic, selectedPEST, selectedSource, selectedSWOT, selectedCountry, selectedCity);
  };

  const handleTopicChange = event => {
    setSelectedTopic(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, event.target.value, selectedPEST, selectedSource, selectedSWOT, selectedCountry, selectedCity);
  };

  const handlePESTChange = event => {
    setSelectedPEST(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, selectedTopic, event.target.value, selectedSource, selectedSWOT, selectedCountry, selectedCity);
  };

  const handleSourceChange = event => {
    setSelectedSource(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, selectedTopic, selectedPEST, event.target.value, selectedSWOT, selectedCountry, selectedCity);
  };

  const handleSWOTChange = event => {
    setSelectedSWOT(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, selectedTopic, selectedPEST, selectedSource, event.target.value, selectedCountry, selectedCity);
  };

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, selectedTopic, selectedPEST, selectedSource, selectedSWOT, event.target.value, selectedCity);
  };

  const handleCityChange = event => {
    setSelectedCity(event.target.value);
    onFilterChange(selectedSector, selectedRegion, selectedEndYear, selectedTopic, selectedPEST, selectedSource, selectedSWOT, selectedCountry, event.target.value);
  };

  return (
    <div className="filters-container">
      <label>
        Sector:
        <select value={selectedSector} onChange={handleSectorChange}>
          <option value="All">All</option>
          {sectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
      </label>
      <label>
        Region:
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="All">All</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </label>
      <label>
        End Year:
        <select value={selectedEndYear} onChange={handleEndYearChange}>
          <option value="All">All</option>
          {endYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </label>
      <label>
        Topics:
        <select value={selectedTopic} onChange={handleTopicChange}>
          <option value="All">All</option>
          {topics.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        PEST:
        <select value={selectedPEST} onChange={handlePESTChange}>
          <option value="All">All</option>
          {PESTs.map(pest => (
            <option key={pest} value={pest}>{pest}</option>
          ))}
        </select>
      </label>
      <label>
        Source:
        <select value={selectedSource} onChange={handleSourceChange}>
          <option value="All">All</option>
          {sources.map(source => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
      </label>
      
      <label>
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="All">All</option>
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </label>
      
    </div>
  );
};

export default Filters;
