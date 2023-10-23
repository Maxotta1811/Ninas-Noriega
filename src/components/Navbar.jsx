import { useState } from 'react';
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

export default Navbar;
