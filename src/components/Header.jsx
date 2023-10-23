import Slider from './Slider'
import Navbar from './Navbar'
import logo from '../images/header/logo.png'
import '../styles/Header.css'

function Header(){
    return(
        <div className="header-container">
            <Slider/>
            <div className="brand-logo">
                <img src={logo} alt="Ninas Noriega" />
            </div>
            <Navbar/>
        </div>
    );
}
export default Header;


