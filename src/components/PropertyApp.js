import React, { useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'; // Importing necessary components and hooks from 'react-router-dom'
import PropertyList from './PropertyList';
import propertiesData from './Data/PropertyData';
import CityTab from './CityTab';
import ShowMore from './ShowMore';
import './PropertyApp.css';

const cities = ['Mumbai', 'Paris', 'Delhi', 'New York'];

const PropertyApp = () => {
  const navigate = useNavigate(); // Hook for navigating to different routes

  const [activeCity, setActiveCity] = useState(cities[0]);
  const [properties, setProperties] = useState(propertiesData.slice(0, 6));

  function getPropertiesForCity(city, count) {
    const filteredProperties = propertiesData.filter((property) => property.city === city);
    return filteredProperties.slice(0, count);
  }

  const handleTabClick = (city) => {
    setActiveCity(city);
    const filteredProperties = getPropertiesForCity(city, 6);
    setProperties(filteredProperties);
    navigate('/');
  };

  const handleShowMoreClick = () => {
    const currentCount = properties.length;
    const newProperties = getPropertiesForCity(activeCity, currentCount + 3);
    setProperties(newProperties);
  };

  return (
    <div className="property-app">
      <CityTab cities={cities} activeCity={activeCity} onTabClick={handleTabClick} />
      <Outlet /> 
      <Routes>
        <Route path="/" element={<PropertyList properties={properties} />} />
        
      </Routes>
      <ShowMore onClick={handleShowMoreClick} />
    </div>
  );
};

export default PropertyApp;
