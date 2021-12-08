import './Sponsors.css';
import genesysLogo from '../Assets/genesys.svg';
import unnLogo from '../Assets/unn-logo.svg';
import privateEstatesLogo from '../Assets/private-estates.svg';
import teneceLogo from '../Assets/tenece.svg';

const Sponsors = () => {
    return (
        <div className = "sponsors">
            <div>
                <img src={unnLogo} alt="Logo for UNN"/>
            </div>
            <div>
                <img src={teneceLogo} alt="Logo for Tenece"/>
            </div>
            <div>
                <img src={privateEstatesLogo} alt="Logo for Private Estates"/>
            </div>
            <div>
                <img src={genesysLogo} alt="Logo for Genesys"/>
            </div>
        </div>
    );
}
 
export default Sponsors;