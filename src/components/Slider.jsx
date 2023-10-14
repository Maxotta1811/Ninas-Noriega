import {useState, useEffect} from "react";
import '../styles/Slider.css'

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ['EXCLUSIVO ONLINE',
     '3 CUOTAS SIN INTERÉS | 6 CUOTAS SIN INTERES EN COMPRAS SUPERIORES A $80.000',
      'ENVÍO GRATIS EN COMPRAS SUPERIORES A $60.000'];
    const intervalDuration = 3000;

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, intervalDuration);
    
        return () => {
          clearInterval(interval);
        };
      }, [texts.length]);
    
      return (
        <div className="slider-container">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`slider-text ${index === currentIndex ? 'active' : ''}`}
            >
              {text}
            </div>
          ))}
        </div>
    );
}

export default Slider;