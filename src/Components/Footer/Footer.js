import './Footer.css';
import logo from '../Assets/secondary-logo.svg';
import twitter from '../Assets/twitter.svg';
import instagram from '../Assets/instagram.svg';
import linkedIn from '../Assets/linkedin.svg';
import facebook from '../Assets/facebook.svg';

const Footer = () => {
    const link = '#';

    return (
        <div className="footer">
            <div className = "footer-left">
                <img src={logo} alt="Logo of the company"/>
                <p>Throw paperwork into the trash.</p>
            </div>
            <div className = "footer-right">
                <div className="icons">
                    <div className="icon">
                        <a href={link}>
                            <img src={facebook} alt="Social Media account on Facebook"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href={link}>
                            <img src={twitter} alt="Social Media account on Twitter"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href={link}>
                            <img src={linkedIn} alt="Social Media account on LinkedIn"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href={link}>
                            <img src={instagram} alt="Social Media account on Instagram"/>
                        </a>
                    </div>
                </div>
                <p>
                    Copyright © Genesys DevStudio. All rights reserved
                </p>
            </div>
            
        </div>
    );
}
 
export default Footer;