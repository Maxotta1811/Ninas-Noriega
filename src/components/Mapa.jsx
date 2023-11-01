import React from 'react';
import '../styles/Mapa.css'; 

const Map = () => {

  return (
    <div className='divmapa'>
    <a href="https://www.google.com/maps/place/Gral.+Heredia+446,+Concepci%C3%B3n,+Tucum%C3%A1n/@-27.3419522,-65.5898223,17z/data=!3m1!4b1!4m5!3m4!1s0x9423cf44f4c43c39:0x17c0456d0c94ebbc!8m2!3d-27.341957!4d-65.5872474?entry=ttu"> <img className='imgmapa' src="src/images/Contenido/imgmapa.jpg" alt="" /> </a> 
    <a  className='linkmapa' href="https://www.google.com/maps/place/Gral.+Heredia+446,+Concepci%C3%B3n,+Tucum%C3%A1n/@-27.3419522,-65.5898223,17z/data=!3m1!4b1!4m5!3m4!1s0x9423cf44f4c43c39:0x17c0456d0c94ebbc!8m2!3d-27.341957!4d-65.5872474?entry=ttu"> <h1 className='titmapa' >Nuestra Ubicacion</h1> </a>
    </div>
  );
}

export default Map;
