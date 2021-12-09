import React from 'react';
import logoLogin from '../Assets/login-logo.svg';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className="login-bg">
            <div className = "login-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className = "form">
                <div className="form-text">
                    <p>Log in</p>
                    <p>Access your resource edge account</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id=""/>
                </div>
                <div></div>
                    <hr/>
                    <p>Forgot Password</p>
            </form>
        </div>
    );
}
 
export default LogIn;