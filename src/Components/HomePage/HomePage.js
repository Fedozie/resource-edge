import React from 'react';
import './HomePage.css';
import mainPageImage from '../Assets/main-page-image.svg';
import mobileImage from '../Assets/mobileImg.svg';

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
                <picture>
                    <source srcset={mobileImage} media = "(max-width: 26.5625rem)"/>
                    <img src={mainPageImage} alt="Homepage JPEG" className="homepage-right-image"/>
                </picture>
                
            </div>
        </div>
    );
}
 
export default HomePage;