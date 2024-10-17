import React from 'react';

function FlowerCard({ flower }) {
  return (
    <div className="card">
      <img src={flower.image} alt={flower.name} />
      <h3>{flower.name}</h3>
      <p>{flower.description}</p>
    </div>
  );
}

export default FlowerCard;