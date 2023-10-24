
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Pijamas.css'

const  Pijamas = () => {
  const products = [
    {
      name: 'ADELMA',
      price: '$25.000',
      description: 'Musculosa con detalle de tul bordado y short con puntilla',
      talle: "Talle: S, M, L, XL, XXL",
      image: '../src/images/tienda/Pijamas/Adelma1.jpg',
    },
    {
        name: 'ADELMA',
        price: '$25.000',
        description: 'Musculosa con detalle de tul bordado y short con puntilla',
        talle: "Talle: S, M, L, XL, XXL",
        image: '../src/images/tienda/Pijamas/Adelma2.jpg',
      },
    {
      name: 'ANTONIA',
      price: '$20.500',
      description: 'Bralette de microtul con vuelo y short tiro alto en sedita',
      talle: "Talle: S, M, L, XL, XXL",
      image: '../src/images/tienda/Pijamas/Antonia1.jpg',
    },
      {
        name: 'BERNARDITA',
        price: '$22.500',
        description: 'Remera con vuelitos y short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Bernardita1.jpg',
      },
      {
        name: 'BERNARDITA',
        price: '$22.500',
        description: 'Remera con vuelitos y short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Bernardita2.jpg',
      },
      {
        name: 'FAUSTINA',
        price: '$22.500',
        description: 'Top scrunchiey short tiro alto con vuelos',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Faustina1.jpg',
      },
      {
        name: 'FAUSTINA',
        price: '$22.500',
        description: 'Top scrunchiey short tiro alto con vuelos',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Faustina2.jpg',
      },
      {
        name: 'HORTEN',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y vuelo, short con vuelo',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Horten2.jpg',
      },
      {
        name: 'HORTEN',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y vuelo, short con vuelo',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Horten1.jpg',
      },
      {
        name: 'ISOLINA',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y vuelo, short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Isolina1.jpg',
      },
      {
        name: 'ISOLINA',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y vuelo, short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Isolina2.jpg',
      },
      {
        name: 'INES',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Ines1.jpg',
      },
      {
        name: 'INES',
        price: '$22.500',
        description: 'Musculosa con breteles regulables y short con puntilla',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Ines2.jpg',
      },
      {
        name: 'MERCI',
        price: '$27.000',
        description: 'Musculosa con detalle de puntilla y vuelo. Short tiro alto',
        talle: "Talle: S, M, L, XL,XXL",
        image: '../src/images/tienda/Pijamas/Merci.jpg',
      },
      {
        name: 'ANTONIA',
        price: '$20.500',
        description: 'Bralette de microtul con vuelo y short tiro alto en sedita',
        talle: "Talle: S, M, L, XL, XXL",
        image: '../src/images/tienda/Pijamas/Antonia.jpg',
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

export default Pijamas;
