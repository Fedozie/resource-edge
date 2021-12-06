import React from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.svg';

const Header = () => {
    return (
        <header className = "navbar">
            <div className = "navbar-left">
                <img src={logo} alt="logo" className = "navbar-logo"/>
                <div className = "navbar-left-menu">
                    <a href="#">Features</a>
                    <a href="#">About</a>
                </div>
            </div>
            <div className = "navbar-right">
                <button className = "sign-up-btn">Sign up</button>
                <button className = "sign-in-btn">Sign in</button>
            </div>
        </header>
    );
}
 
export default Header;