import React from 'react';
import './DashboardNavbar.css';
import logo from '../Assets/dashboard-logo.svg';
import mobileLogo from '../Assets/logo-mobile.svg';


const DashboardNavbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className = "navbar-left">
                    <button className="hamburger">
                        <span className = 'line1'></span>
                        <span className = 'line3'></span>
                        <span className = 'line3'></span>
                    </button>
                    <div className="logo">
                        <picture>
                            <source media="(max-width: 26.5625rem)" srcset={mobileLogo}/>
                            <img src={logo} alt="Logo of Resource Edge"/>
                        </picture>
                        
                    </div>
                    <div className="vr"></div>
                    <div className="role">
                        <p>TM Dashboard</p>
                    </div>
                </div>
                <div className = "navbar-right">
                    <div className = "avatar">
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default DashboardNavbar;