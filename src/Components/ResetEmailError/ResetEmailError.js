import './ResetEmailError.css';
import {NavLink} from 'react-router-dom';
import errorImg from '../Assets/error.svg';
import logoLogin from '../Assets/login-logo.svg';

const ResetError = () => {
    const link = '#';

    return (
        <div className="authentication-bg">
            <div className = "authentication-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className="form error">
                <div className="form-text">
                    <p>Reset Password</p>
                    <p>To enable us reset your password, enter your email below</p>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder = "Enter email" />
                </div>
                <div className="error-message">
                    <img src={errorImg} alt=""/>
                    <p>Enter email address</p>
                </div>
                <div className = "loadingDiv">
                    <button>
                        <NavLink to = "/reset-password-error">
                            <a href={link}>Next</a>
                        </NavLink>
                    </button>
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
 
export default ResetError;