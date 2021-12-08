
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Components/HomePage/HomePage';
import HumanResources from '../Components/HumanResources/HumanResources';
import DuoSection from '../Components/DuoSection/DuoSection';
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <HomePage/>
            <HumanResources/>
            <DuoSection/>
            <Footer/>
        </div>
    );
}
 
export default LandingPage;