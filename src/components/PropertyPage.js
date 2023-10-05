import React from 'react';
import { useParams, Link } from 'react-router-dom';
import propertiesData from './Data/PropertyData';
import './PropertyPage.css'

const PropertyPage = () => {
    const { id } = useParams();
    const property = propertiesData.find((p) => p.id === id);
  
    if (!property) {
      return <div className="property-not-found">
        Property not found
        <Link to="/" className="back-button">
        &lt; Back to Home
      </Link>
        </div>;
    }
  
    return (
      <div className="property-page">
        <img src={property.imageUrl} alt={property.address} className="property-image" />
        <h2 className="property-title">{property.address}</h2>
        <div className="property-details">
          <p className="property-info">Rooms: {property.rooms}</p>
          <p className="property-info">Beds: {property.beds}</p>
          <p className="property-info">Bathrooms: {property.bathrooms}</p>
          <p className="property-info">Area: {property.area} sqft</p>
          <p className="property-info">Rent: ${property.rent} per month</p>
        </div>
        <br/>
        <Link to="/" className="back-button">
        &lt; Back to Home
      </Link>
      </div>
    );
  };

export default PropertyPage;
