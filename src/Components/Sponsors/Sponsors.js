import './Sponsors.css';
import genesysLogo from '../Assets/genesys.svg';
import unnLogo from '../Assets/unn-logo.svg';
import privateEstatesLogo from '../Assets/private-estates.svg';
import teneceLogo from '../Assets/tenece.svg';
import unnMobile from '../Assets/mobileUNN.svg';
import genesysMobile from '../Assets/mobileGenesys.svg';
import mobilePrivateEstates from '../Assets/mobilePrivateEstates.svg';
import teneceMobile from '../Assets/mobileTenece.svg';

const Sponsors = () => {
    return (
        <div className = "sponsors">
            <div>
                <picture>
                    <source srcset = {unnMobile} media = "(max-width: 26.5625rem)"/>
                    <img src={unnLogo} alt="Logo for UNN"/>
                </picture>
            </div>
            <div>
                <picture>
                    <source srcset = {teneceMobile} media = "(max-width: 26.5625rem)"/>
                    <img src={teneceLogo} alt="Logo for Tenece"/>
                </picture>
                
            </div>
            <div>
                <picture>
                    <source srcset = {mobilePrivateEstates} media = "(max-width: 26.5625rem)"/>
                    <img src={privateEstatesLogo} alt="Logo for Private Estates"/>
                </picture>
            </div>
            <div>
                <picture>
                    <source srcset={genesysMobile} media = "(max-width: 26.5625rem)"/>
                    <img src={genesysLogo} alt="Logo for Genesys"/>
                </picture>
            </div>
        </div>
    );
}
 
export default Sponsors;