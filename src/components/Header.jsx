import Slider from './Slider'
import logo from '../images/header/logo.png'
import '../styles/Header.css'

function Header(){
    return(
        <div className="header-container" id='inicio' >
            <Slider/>
            <div className="brand-logo">
               <a href="/"><img src={logo} alt="Ninas Noriega" /></a> 
            </div>
           
        </div>
    );
}
export default Header;


