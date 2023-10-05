import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyList.css'

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <Link to={`/property/${property.id}`} key={property.id}>
          <div className="property-card">
            <img src={property.imageUrl} alt={property.address} />
            <div className="property-details">
              <h3>{property.address}</h3>
              <p>Rooms: {property.rooms}</p>
              <p>Beds: {property.beds}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Area: {property.area} sqft</p>
              <p>Rent: ${property.rent} per month</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PropertyList;

