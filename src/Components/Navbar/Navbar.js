import React from 'react';
import {  NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../Assets/Logo.svg';
import mobileLogo from '../Assets/logo-mobile.svg';

//Component for the Navbar section of the Landing Page

const Header = () => {
    const link = '#';

    return (
        <header className = "navbar">
            <div className = "navbar-left">
                <picture>
                    <source srcset={mobileLogo} media = "(max-width: 26.5625rem)"/>
                    <img 
                    src={logo} 
                    alt="logo" className = "navbar-logo"/>
                </picture>
                
                <div className = "navbar-left-menu">
                    <a href={link}>Features</a>
                    <a href={link}>About</a>
                </div>
            </div>
            <div className = "navbar-right">
                <button className = "sign-up-btn">Sign up</button>
                <NavLink to="/signin">
                    <button className = "sign-in-btn">Sign in</button>
                </NavLink>
            </div>
        </header>
    );
}
 
export default Header;