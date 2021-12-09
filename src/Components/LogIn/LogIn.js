import React from 'react';
import {useState} from 'react';
import { NavLink } from "react-router-dom";
import logoLogin from '../Assets/login-logo.svg';
import './LogIn.css';

const LogIn = () => {
    const link = '#';
    const [email, setEmail] = useState('');

    return (
        <div className="authentication-bg">
            <div className = "authentication-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className = "form">
                <div className="form-text">
                    <p>Log in</p>
                    <p>Access your resource edge account</p>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder = "Enter email" value = {email} onChange = {(e) => setEmail(e.target.value) }/>
                </div>
                <div className = "loadingDiv"></div>
                <hr/>
                <div className = "password-forget">
                    <NavLink to = "/forget-password">
                        <a href = {link}>Forgot Password?</a>
                    </NavLink>      
                </div>
            </form>
        </div>
    );
}
 
export default LogIn;