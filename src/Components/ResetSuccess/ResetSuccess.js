import './ResetSuccess.css';
import {NavLink} from 'react-router-dom';
import logoLogin from '../Assets/login-logo.svg';
import checkImg from '../Assets/check-circle-outline.svg';

const ResetSuccess = () => {
    const link = '#';

    return (
        <div className="authentication-bg">
             <div className = "authentication-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className="form success-form">
                <div className="form-text">
                    <h3>Reset Password</h3>
                </div>
                <div className = "check">
                    <img src={checkImg} alt="" />
                </div>
                
                <p className = "success-form-text">
                    A recovery email has been sent to your email address.
                </p>
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
 
export default ResetSuccess;