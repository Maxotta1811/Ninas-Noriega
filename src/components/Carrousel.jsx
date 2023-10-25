import Carousel from 'react-bootstrap/Carousel';
import Carrusel1 from '../images/carrusel/Carrusel1.jpg'
import Carrusel2 from '../images/carrusel/Carrusel2.jpg'
import Carrusel3 from '../images/carrusel/Carrusel3.jpg'
import'../styles/Carousel.css'
function MyCarousel() {
  return (
    
    <Carousel>
      <Carousel.Item id="carousel-item">
       <a href="/Legado"><img
          id="imgcarousel"
          src={Carrusel1}
          alt="Primer slide"
        /></a> 
      </Carousel.Item>
      <Carousel.Item id="carousel-item">
       <a href="/Legado"> <img
          id="imgcarousel"
          src={Carrusel2}
          alt="Segundo slide"
        /> </a>
      </Carousel.Item>
      <Carousel.Item id="carousel-item">
        <a href="/Legado"><img
          id="imgcarousel"
          src={Carrusel3}
          alt="Tercer slide"
        /> </a>
      </Carousel.Item>
    </Carousel>
    
  );
}


export default MyCarousel;
