import React from 'react';
import FlowerList from './FlowerList';
import flowerData from './flowerData.json'; // นำเข้าข้อมูลดอกไม้
import './style.css';

function App() {
  return (
    <div className="app">
      <h1>ความหมายของดอกไม้</h1>
      <FlowerList flowers={flowerData} />
    </div>
  );
}

export default App;