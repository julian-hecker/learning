import React from 'react';
import HelloWorld from '../HelloWorld';
import Clock from '../Clock';
import Card from '../Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Clock />
      <Card message="THIS IS CARD" />
    </div>
  );
}

export default App;
