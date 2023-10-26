import Carousel from 'react-bootstrap/Carousel'
import Carrusel1 from '../images/tienda/Legado/Adoracion3.jpg'
import Carrusel2 from '../images/tienda/Legado/Solidea2.jpg'
import Carrusel3 from '../images/tienda/Legado/Concepcion3.jpg'
import Carrusel4 from '../images/tienda/Legado/Felisa3.jpg'
import Carrusel5 from '../images/tienda/Legado/Concepcion4.jpg'
import Carrusel6 from '../images/tienda/Legado/Adoracion4.jpg'
import Carrusel7 from '../images/tienda/Legado/Felisa2.jpg'
import Carrusel8 from '../images/tienda/Legado/Solidea3.jpg'
import Carrusel9 from '../images/tienda/Legado/Genoveva1.jpg'

import '../styles/Legado.css'

function Legado() {
  return (
    <div>
      {/* Primer carousel */}
      <Carousel>
        <Carousel.Item id="carousel-item-1">
          <a href="/Legado">
            <img
              id="imgcarousel-1"
              src={Carrusel1}
              alt="Primer slide"
            />
          </a>
          
        </Carousel.Item>
        <Carousel.Item id="carousel-item-2">
          <a href="/Legado">
            <img
              id="imgcarousel-2"
              src={Carrusel2}
              alt="Segundo slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-3">
          <a href="/Legado">
            <img
              id="imgcarousel-3"
              src={Carrusel3}
              alt="Tercer slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
      <div className='separador'>

      </div>
      {/* Segundo carousel */}
      <Carousel>
        <Carousel.Item id="carousel-item-4">
          <a href="/Legado">
            <img
              id="imgcarousel-4"
              src={Carrusel4}
              alt="Cuarto slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-5">
          <a href="/Legado">
            <img
              id="imgcarousel-5"
              src={Carrusel5}
              alt="Quinto slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-6">
          <a href="/Legado">
            <img
              id="imgcarousel-6"
              src={Carrusel6}
              alt="Sexto slide"
            />
          </a>
        </Carousel.Item>
      
        <Carousel.Item id="carousel-item-7">
          <a href="/Legado">
            <img
              id="imgcarousel-7"
              src={Carrusel7}
              alt="Séptimo slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-8">
          <a href="/Legado">
            <img
              id="imgcarousel-8"
              src={Carrusel8}
              alt="Octavo slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item id="carousel-item-9">
          <a href="/Legado">
            <img
              id="imgcarousel-9"
              src={Carrusel9}
              alt="Noveno slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Legado;

/*
const Legado = () => {
    const coleccion = [
    
    
        {
          image: '../src/images/tienda/Legado/Adoracion.jpg', 
        },
        {
          image: '../src/images/tienda/Legado/Adoracion2.jpg', 
        },
        {
          image: '../src/images/tienda/Legado/Concepcion.jpg',
        },
        {
            image: '../src/images/tienda/Legado/Concepcion1.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Concepcion2.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Felisa.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Felisa1.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Genoveva.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Solidea.jpg',
          },
          {
            image: '../src/images/tienda/Legado/Solidea1.jpg',
          },
          
          
      ];
    
      return (
        <section className="legado-section" >
          <Container>
          <h6> COLECCION LEGADO</h6> {/* Agregar el título aquí }
    
            <Row>
              {coleccion.map((product, index) => (
                <Col md={6} key={index}>
                  <div className="legado-item">
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
  )
}

export default Legado */
