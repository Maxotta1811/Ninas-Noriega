import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Batas.css'

const  Batas = () => {
  const products = [
    {
      name: 'ALTAGRACIA',
      price: '$35.500',
      description: 'Bata larga con puntilla en escote y mangas abullonadas',
      talle: "Talle: S, M, L, XL",
      image: '../src/images/tienda/Batas/Altagracia2.jpg',
    },
    {
      name: 'AMALIA',
      price: '$23.500',
      description: 'Detalle en las mangas de tul bordado y lazo',
      talle: "Talle: S, M, L, XL",
      image: '../src/images/tienda/Batas/Amalia1.jpg',
    },
    {
      name: 'BRIGIDA',
      price: '$23.000',
      description: 'Detalle en las mangas de tul bordado y lazo',
      talle: "Talle: S, M, L, XL",
      image: '../src/images/tienda/Batas/Brigida1.jpg',
    },
    {
        name: 'LUISA',
        price: '$19.000',
        description: 'Detalle de puntilla comun en las mangas',
        talle: "Talle: S, M, L, XL",
        image: '../src/images/tienda/Batas/Luisa1.jpg',
      },
      {
        name: 'LUISA',
        price: '$19.000',
        description: 'Detalle de puntilla comun en las mangas',
        talle: "Talle: S, M, L, XL",
        image: '../src/images/tienda/Batas/Luisa2.jpg',
      },
      {
        name: 'MERCI',
        price: '$19.000',
        description: 'Detalle de puntilla fina en mangas y frente',
        talle: "Talle: S, M, L, XL",
        image: '../src/images/tienda/Batas/Merci.jpg',
      },
      {
        name: 'MERCI',
        price: '$19.000',
        description: '6Detalle de puntilla fina en mangas y frente',
        talle: "Talle: S, M, L, XL",
        image: '../src/images/tienda/Batas/Merci1.jpg',
      },
      {
        name: 'JUANA',
        price: '$19.000',
        description: 'Bata lisa con lazo',
        talle: "Talle: S, M, L, XL",
        image: '../src/images/tienda/Batas/Juana.jpg',
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
                <h5>{product.name}</h5>
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

export default Batas;
