import React from 'react';

const ShowMoreButton = ({ onClick }) => {
  return (
    <button className="show-more-button" onClick={onClick}>
      Show More
    </button>
  );
};

export default ShowMoreButton;
