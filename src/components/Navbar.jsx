
import '../styles/Navbar.css';

const Navbar = () => {
    return (
    <div className='navbar'>
      <div className='nav-logo'>Niñas Noriega</div>
      <div className='nav-items'>
        <a href="/">Pagina Principal</a>
        <a href="/Ajuares">Ajuares</a>
        <a href="/Batas">Batas</a>
        <a href="/Pijamas">Pijamas</a>
        <a href="https://wa.me/c/5493863697703">Contacto</a>
      </div>
      <div className='nav-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
)
}

export default Navbar


/*import { useState } from 'react';
import '../styles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (

    <nav className='Navbar'>
      <div className='logo'>Niñas-Noriega</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`} >
        <ul>

          <li><a href="/">Home</a></li>
          <li><a href="/shop">Products</a></li>
          <li><a href="#"></a>Services</li>
          <li><a href="#"></a>Contact</li>

        </ul>

      </div>

      <div className='hambueger-menu' onClick={toggleNavbar} >
        &#9776;
      </div>

    </nav>

  );

}

export default Navbar;*/
