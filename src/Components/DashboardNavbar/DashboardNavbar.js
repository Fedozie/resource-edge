import React from 'react';
import './DashboardNavbar.css';
import logo from '../Assets/dashboard-logo.svg';


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
                        <img src={logo} alt="Logo of Resource Edge"/>
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