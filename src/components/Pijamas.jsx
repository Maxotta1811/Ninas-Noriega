
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/Pijamas.css'

const  Pijamas = () => {
  const products = [
    {
      name: 'Adelma',
      price: '$',
      description: 'Musculosa con detalle de tul bordado y short con puntilla',
      talle: "Talle: S, M, L, XL, XXL",
      images: ['src/images/tienda/Pijamas/Adelma1.jpg',
              'src/images/tienda/Pijamas/Adelma2.jpg'
    ]

    },
    {
      name: 'Antonia',
      price: '$26.990',
      description: 'Musculosa con detalle de tul bordado y short con puntilla',
      talle: "Talle: S, M, L, XL",
      images: ['src/images/tienda/Pijamas/Antonia.jpg',
      'src/images/tienda/Pijamas/Antonia1.jpg'
    ]
    },
    {
      name: 'Bernardita',
      price: '$29.990',
      description: 'Remera con vuelos y short con puntilla',
      talle: "Talle: S, M, L, XL",
      images: ['src/images/tienda/Pijamas/Bernardita1.jpg',
              'src/images/tienda/Pijamas/Bernardita2.jpg'
            ]
    },
    {
        name: 'Faustina',
        price: '$26.990',
        description: 'Top con srunchie y short tiro alto con vuelos',
        talle: "Talle: S, M, L, XL",
        images: ['src/images/tienda/Pijamas/Faustina1.jpg',
                'src/images/tienda/Pijamas/Faustina2.jpg'
              ]
       
      },
      {
        name: 'Horten',
        price: '$28.990',
        description: 'Musculosa con vuelos y breteles regulables, Short con vuelos ',
        talle: "Talle: S, M, L, XL",
        images: ['src/images/tienda/Pijamas/Horten1.jpg',
        'src/images/tienda/Pijamas/Horten2.jpg'
      ]
        
      },
      {
        name: 'Ines',
        price: '$17.990',
        description: 'Musculosa con breteles regulables y short con puntillas',
        talle: "Talle: S, M, L, XL",
        images: ['src/images/tienda/Pijamas/Ines1.jpg',
        'src/images/tienda/Pijamas/Ines2.jpg']
        
      },
      {
        name: 'Isolina',
        price: '$28.990',
        description: 'Musculosa con breteles regulables y vuelo. Short con puntilla',
        talle: "Talle: S, M, L, XL",
        images: ['src/images/tienda/Pijamas/Isolina1.jpg',
        'src/images/tienda/Pijamas/Isolina2.jpg']
        
      },
      {
        name: 'Merci',
        price: '$24.990',
        description: 'Musculosa con detalle de puntillas y vuelo. Short tiro alto',
        talle: "Talle: S, M, L, XL",
        images: ['src/images/tienda/Pijamas/Merci.jpg',
      /*'src/images/tienda/Pijamas/Isolina2.jpg'*/]
        
      },
      /*{
        name: 'Horten',
        price: '$28.990',
        description: 'Musculosa con vuelos y breteles regulables, Short con vuelos ',
        talle: "Talle: S, M, L, XL",
        images: [ '../images/tienda/Pijamas/Horten1.jpg',
        'src/images/tienda/Pijamas/Horten2.jpg']
        
      },
      {
        name: 'Ines',
        price: '$17.990',
        description: 'Musculosa con breteles regulables y short con puntillas',
        talle: "Talle: S, M, L, XL",
        images: ['../images/tienda/Pijamas/Ines1.jpg',
        'src/images/tienda/Pijamas/Ines2.jpg']
        
      },
      {
        name: 'Isolina',
        price: '$28.990',
        description: 'Musculosa con breteles regulables y vuelo. Short con puntilla',
        talle: "Talle: S, M, L, XL",
        images: ['../images/tienda/Pijamas/Isolina1.jpg',
        'src/images/tienda/Pijamas/Isolina2.jpg']
        
      },
      {
        name: 'Merci',
        price: '$24.990',
        description: 'Musculosa con detalle de puntillas y vuelo. Short tiro alto',
        talle: "Talle: S, M, L, XL",
        images: ['../images/tienda/Pijamas/Merci.jpg',
        'src/images/tienda/Pijamas/Isolina2.jpg']
        
      },*/
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <section className="gallery-section" >
      <Container>

        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index}>
              <div className="product-item">
              <Slider {...sliderSettings}>
                {product.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt={`${product.name} - Image ${imageIndex + 1}`} />
                  </div>
                  ))}
              </Slider>
                
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

export default Pijamas;
