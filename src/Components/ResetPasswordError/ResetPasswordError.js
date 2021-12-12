import './ResetPasswordError.css';
import {NavLink} from 'react-router-dom';
import errorImg from '../Assets/error.svg';
import logoLogin from '../Assets/login-logo.svg';

const ResetPasswordErro = () => {
    const link = '#';

    return (
        <div className="authentication-bg pass-error-bg">
            <div className = "authentication-logo pass-error-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className="form error pass-error-form">
                <div className="form-text">
                    <p>Reset Password</p>
                    <p>The password should have atleast 6 characters</p>
                </div>
                <div className="form-input">
                    <label htmlFor="pass">New Password</label>
                    <input type="password" name="pass" id="pass" placeholder = "Enter password"/>
                </div>
                <div className="error-message">
                    <img src={errorImg} alt=""/>
                    <p>Enter password</p>
                </div>
                <div className="form-input">
                    <label htmlFor="newPass">Confirm Password</label>
                    <input type="password" name="newPass" id="newPass" placeholder = "Confirm password"/>
                </div>
                <div className="error-message">
                    <img src={errorImg} alt=""/>
                    <p>Enter password</p>
                </div>
                <div className = "loadingDiv"></div>
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
 
export default ResetPasswordErro;