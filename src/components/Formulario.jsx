import React, { useState } from 'react';
import "../styles/Formulario.css";



const FormularioIndumentaria = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    //almacenamiento local
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);

    console.log('Datos guardados en el almacenamiento local');
  
  };

  return (
    <form className="formulario-indumentaria" onSubmit={handleSubmit}>
    
    <h1 className='titform'>SUSCRIBITE A NUESTRA PAGINA! </h1>
            <h2 className='titform2'>¿Queres recibir nuestras ofertas y lanzamientos? Comenza ahora!...</h2>

            <div className="formulario-indumentaria__campo">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="formulario-indumentaria__campo">
                <label htmlFor="correo">Correo electrónico:</label>
                <input 
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </div>

            {enviado && <p  className='msjsuscripto'>Mensaje de suscripción enviado correctamente</p>}
            <img src="../src/images/Contenido/imgform2.jpg" alt="" className='Video' />

    </form>
  );
};

export default FormularioIndumentaria;



