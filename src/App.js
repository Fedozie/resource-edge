
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import HumanResources from './Components/HumanResources/HumanResources';
import DuoSection from './Components/DuoSection/DuoSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <HumanResources/>
      <DuoSection/>
    </div>
  );
}

export default App;
