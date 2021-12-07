import React from 'react';
import './HomePage.css';
import mainPageImage from '../Assets/main-page-image.svg';

//Component for the first page of the Landing Page

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage-left">
                <p>
                    Throw paperwork into the trash where it belongs.
                </p>
                <p>
                    Eliminate all the hassle involved in managing people operations by automating it.
                </p>
            </div>
            <div className="homepage-right">
                <img src={mainPageImage} alt="" className="homepage-right-image"/>
            </div>
        </div>
    );
}
 
export default HomePage;