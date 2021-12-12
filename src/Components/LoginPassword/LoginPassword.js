import './LoginPassword.css';
import {NavLink} from "react-router-dom";
import logoLogin from '../Assets/login-logo.svg';
import pencilIcon from '../Assets/pencil-icon.svg';
import watch from '../Assets/watch.svg';
import {useLocation} from 'react-router-dom'

const LoginPassword = () => {
    let location = useLocation();
    const {usrEmail} = location.state;
    const link = '#';

    return (
        <div className="authentication-bg">
            <div className = "authentication-logo">
                <img src={logoLogin} alt=""/>
            </div>
            <form className="form login-pass">
                <div className="form-text">
                    <p>Log in</p>
                    <p>Access your resource edge account</p>
                </div>
                <div className="form-sub-text-container">
                    <div className="form-sub-text">
                        <p>Ositadinma Nwangwu</p>
                        <p>{usrEmail}</p>
                    </div>
                    <div className="pencil-icon">
                        <img src={pencilIcon} alt=""/>
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="loginPass">Password</label>
                    <input type="password" name="loginPass" id="loginPass" placeholder = "Enter Password"/>
                    <img src={watch} alt="" className = "watchIcon"/>
                </div>
                <div className = "loadingDiv">
                </div>
                <hr/>
                <div className = "password-forget">
                    <NavLink to = "/forget-password">
                        <a href = {link}>Forgot Password</a>
                    </NavLink>      
                </div>
            </form>
        </div>
    );
}
 
export default LoginPassword;