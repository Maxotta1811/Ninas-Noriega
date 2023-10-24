import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Ajuares.css'

const  Ajuares = () => {
  const products = [
    {
      name: 'Bata Juana & Pijama Hortencia',
      price: '$41.500',
      description: '',
      talle: "Talles  Batas: S/M, L/XL   Pijamas: S, M ,L, XL, XXL",
      image: '../src/images/tienda/Ajuares/Ajuar1.jpg',
    },
    {
      name: 'Bata Brigida & Pijama Ines',
      price: '$45.500',
      description: '',
      talle: "Talles  Batas: S/M, L/XL   Pijama: S, M ,L, XL, XXL",
      image: '../src/images/tienda/Ajuares/Ajuar2.jpg',
    },
    {
      name: 'Bata Brigida & Camison Marcela',
      price: '$45.500',
      description: 'SIN STOCK',
      talle: "Talles  Batas: S/M, L/XL   Camison: S, M ,L, XL, XXL",
      image: '../src/images/tienda/Ajuares/Ajuar3.jpg',
    },
    {
        name: 'Bata Juana & Pijama Isolina',
        price: '$41.500',
        description: '',
        talle: "Talles  Batas: S/M, L/XL   Pijamas: S, M ,L, XL, XXL",
        image: '../src/images/tienda/Ajuares/Ajuar4.jpg',
      },
      {
        name: 'Bata Brigida & Pijama Ines',
        price: '$45.500',
        description: '',
        talle: "Talles  Batas: S/M, L/XL   Pijamas: S, M ,L, XL, XXL",
        image: '../src/images/tienda/Ajuares/Ajuar5.jpg',
      },
      {
        name: 'Bata Brigida & Pijama Ines',
        price: '$45.500',
        description: '',
        talle: "Talles  Batas: S/M, L/XL   Pijamas: S, M ,L, XL, XXL",
        image: '../src/images/tienda/Ajuares/Ajuar6.jpg',
      },
      {
        name: 'Bata Amalia & Pijama Isolina',
        price: '$46.000',
        description: '',
        talle: "Talles  Batas: S/M, L/XL   Pijamas: S, M ,L, XL, XXL",
        image: '../src/images/tienda/Ajuares/Ajuar7.jpg',
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

export default Ajuares;
