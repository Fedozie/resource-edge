import './Reset.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import validator from 'validator';
import logoLogin from '../Assets/login-logo.svg';


const Reset = () => {
    const link = '#';

    return (
        <div className="authentication-bg reset">
             <div className = "authentication-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className="form">
                <div className="form-text">
                    <p>Reset Password</p>
                    <p>To enable us reset your password, enter your email below</p>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder = "Enter email" />
                </div>
                <div className = "loadingDiv">
                    <NavLink to = "/reset-success">
                        <button>
                            <a href={link}>Next</a>
                        </button>
                    </NavLink>
                </div>
                <hr/>
                <div className = "password-forget">
                    <NavLink to = "/signin">
                        <a href = {link}>Back to Login</a>
                    </NavLink>      
                </div>
            </form>
        </div>
    );
}
 
export default Reset;