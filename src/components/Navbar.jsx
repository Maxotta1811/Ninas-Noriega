import { useState } from 'react';
import '../styles/Navbar.css'; // Importa tu archivo CSS para estilos

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleNavbar}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;


