import React, { useState } from 'react';
import FlowerCard from './FlowerCard';

function FlowerList({ flowers }) {
  const [filter, setFilter] = useState('');

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="ค้นหาชื่อดอกไม้" 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
      />
      <div className="flower-list">
        {filteredFlowers.map(flower => (
          <FlowerCard key={flower.name} flower={flower} />
        ))}
      </div>
    </div>
  );
}

export default FlowerList;