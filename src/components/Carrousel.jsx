import Carousel from 'react-bootstrap/Carousel';
import Carrusel1 from '../images/carrusel/Carrusel1.jpg'
import Carrusel2 from '../images/carrusel/Carrusel2.jpg'
import Carrusel3 from '../images/carrusel/Carrusel3.jpg'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item style={{ width: '100vw', height: 'auto' }}>
        <img
          className="imgcarousel"
          src={Carrusel1}
          alt="Primer slide"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: 'auto' }}>
        <img
          className="imgcarousel"
          src={Carrusel2}
          alt="Segundo slide"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: 'auto' }}>
        <img
          className="imgcarousel"
          src={Carrusel3}
          alt="Tercer slide"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default MyCarousel;