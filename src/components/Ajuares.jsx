import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Ajuares.css'

const  Ajuares = () => {
  const products = [
    {
      name: 'Pantalon Snaps',
      price: '$29.990',
      description: '6 cuotas sin interes de $4.998,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/images/Galeria/Ajuar.jpg',
    },
    {
      name: 'Carpeter Black Pant',
      price: '$26.990',
      description: '6 cuotas sin interes de $4.498,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/pantalon2.jpg',
    },
    {
      name: 'Pantalón Skate Cargo',
      price: '$29.990',
      description: '6 cuotas sin interés de $4.998,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/pantalon3.jpg',
    },
    {
        name: 'Carpenter Pant Off White',
        price: '$26.990',
        description: '6 cuotas sin interés de $4.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon4.jpg',
      },
      {
        name: 'Jogg Over Black',
        price: '$28.990',
        description: '6 cuotas sin interés de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon5.jpg',
      },
      {
        name: 'Pantalon Essential Patagonia',
        price: '$17.990',
        description: '6 cuotas sin interés de $2.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon6.jpg',
      },
      {
        name: 'Jogg Over Grey',
        price: '$28.990',
        description: '6 cuotas sin interés de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon7.jpg',
      },
      {
        name: 'Pantalon BW Straight',
        price: '$24.990',
        description: '6 cuotas sin interés de $4.165',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon8.jpg',
      },
      {
        name: 'Jeans KOTK Blue',
        price: '$27.990',
        description: '6 cuotas sin interés de $4.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon9.jpg',
      },
      {
        name: 'Jeans KOTK Black',
        price: '$27.990',
        description: '6 cuotas sin interés de $4.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon10.jpg',
      },
      {
        name: 'Pantalon Basketball',
        price: '$17.990',
        description: '6 cuotas sin interés de $2.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon11.jpg',
      },
      {
        name: 'Pantalon Essential Black',
        price: '$26.990',
        description: '6 cuotas sin interés de $4.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon12.jpg',
      },
  ];

  return (
    <section className="gallery-section" >
      <Container>

        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index}>
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.talle}</p>
                <h2>{product.description}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Ajuares;
