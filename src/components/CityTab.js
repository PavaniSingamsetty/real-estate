import React from 'react';
import './CityTab.css'

const CityTabs = ({ cities, activeCity, onTabClick }) => {
  return (
    <div className="city-tabs">
      {cities.map((city) => (
        <div
          key={city}
          className={`city-tab ${city === activeCity ? 'active' : ''}`}
          onClick={() => onTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default CityTabs;
