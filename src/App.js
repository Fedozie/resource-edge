
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import HumanResources from './Components/HumanResources/HumanResources';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <HumanResources/>
    </div>
  );
}

export default App;
