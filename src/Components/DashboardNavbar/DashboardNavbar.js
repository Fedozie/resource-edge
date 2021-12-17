import React, {useState} from 'react';
import './DashboardNavbar.css';
import logo from '../Assets/dashboard-logo.svg';
import mobileLogo from '../Assets/logo-mobile.svg';
import tmIcon from '../Assets/talent-manager-icon.svg';
import emIcon from '../Assets/employee-icon.svg';


const DashboardNavbar = () => {
    const link  = '#';
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <nav className="navbar">
                <div className = "navbar-left">
                    <button className="hamburger" onClick = {showMenu}>
                        <span className = 'line1'></span>
                        <span className = 'line3'></span>
                        <span className = 'line3'></span>
                    </button>
                    <div className="logo">
                        <picture>
                            <source media="(max-width: 26.5625rem)" srcset={mobileLogo}/>
                            <img src={logo} alt="Logo of Resource Edge"/>
                        </picture>
                    </div>
                    <div className="vr"></div>
                    <div className="role">
                        <p>TM Dashboard</p>
                    </div>
                </div>
                <div className = "navbar-right">
                    <div className = "avatar" >
                        <div className={menu ? 'open' : 'close'}>
                            <ul className = "dropdown-container">
                                <li><a href={link}className = "user-name">Ositadinma Nwangwu</a></li>
                                <li className = "profile-container"><a href={link} className = "profile">Profile</a></li>
                                <li className = "resource-prompt">Use Resource as</li>
                                <li className = "user-details">
                                    <div>
                                        <img src={tmIcon} alt=""/>
                                    </div>
                                    <div>Talent Manager</div>
                                    <div></div>
                                </li>
                                <li className = "user-details">
                                    <div>
                                        <img src={emIcon} alt=""/>
                                    </div>
                                    <div>Employee</div>
                                </li>
                                <li className = "vr-line"></li>
                                <li><a href={link}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </nav>
        </div>
    );
}
 
export default DashboardNavbar;