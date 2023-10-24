import React from 'react'
import '../styles/Legado.css'
import { Container, Row, Col } from 'react-bootstrap';

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
        <section className="leago-section" >
          <Container>
          <h6> COLECCION LEGADO</h6> {/* Agregar el título aquí */}
    
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

export default Legado
