import Slider from './Slider'
import logo from '../images/header/logo.png'
import '../styles/Header.css'

function Header(){
    return(
        <div className="header-container">
            <Slider/>
            <div className="brand-logo">
                <img src={logo} alt="Ninas Noriega" />
            </div>
          
        </div>
    );
}
export default Header;


