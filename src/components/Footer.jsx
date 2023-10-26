
import '../styles/Footer.css';

function Footer() {
    return (

        <footer className="footer">
            <div className="footer-section">
                <a href="/Nosotros" className='link'> <h3> NOSOTROS</h3></a> <br /> <br />
                <a href="#inicio" className='link' > <p> Inicio</p> </a>
                <a href="#shop" className='link'><p>Shop</p> </a>
                <a href="/Trabaja" className='link'> <p>Trabaja con nosotros</p> </a>
            </div>

            <div className="footer-section">
                <h3>ATENCION AL CLIENTE</h3> <br /> <br />
                <a href="/talles" className='link'>  <p>Tabla de Talles</p> </a>
                <a href="/Envios" className='link'> <p>Formas de pago</p> </a>
                <a href="/Envios" className='link'> <p>Envios y Seguimiento</p> </a>
            </div>

            <div className="footer-section">
                <h3>SEGUINOS</h3> <br /> <br />

                <div className='redes' > 
                
                <a href="https://www.instagram.com/ninasnoriega/">
                    <img className='imgredes' src="src\images\Footer\instagram.png" alt="" />
                </a>


                <a href="https://wa.me/c/5493863697703">
                    <img className='imgredes' src="src\images\Footer\whatsapp.png" alt="" />
                </a>


                <a href="https://www.facebook.com/josefina.rueda.54?mibextid=LQQJ4d">
                    <img className='imgredes' src="src\images\Footer\facebook.png" alt="" />
                </a>
                
                </div>

               

            </div>
        </footer>
    );
}

export default Footer;

