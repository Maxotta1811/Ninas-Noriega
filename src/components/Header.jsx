import React, { useEffect } from 'react';
import Slider from './Slider';
import logo from '../images/header/img_logosinfondo.png';
import '../styles/Header.css';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const brandLogo = document.querySelector('.brand-logo img');
      const scrollY = window.scrollY;
      const maxScroll = 300; // Ajusta esto según tu preferencia

      const opacity = 1- Math.min(scrollY, maxScroll) / maxScroll;
      const clampedOpacity = Math.max(0, Math.min(1, opacity));

      brandLogo.style.opacity = clampedOpacity;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container" id='inicio'>

        <div className='divslider' > <Slider /></div>


      <div className="brand-logo">
        <a href="/"><img src={logo} alt="Ninas Noriega" /></a>
      </div>
    </div>
  );
}

export default Header;
