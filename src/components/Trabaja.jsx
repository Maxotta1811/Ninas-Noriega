import React from 'react'
import '../styles/Trabaja.css'

const Trabaja = () => {
    return (
        <div >

            <h1 className='tittrabaja'>JOIN OUR TEAM!</h1> <br /> <br />
            <p className='parrafo'>Desde hace 8 años tenemos como misión difundir nuestra marca con propuestas creativas, alcance global y fundamentalmente con un concepto de estilo de vida.

                Nos caracterizamos por enfrentar desafíos en nuestro trabajo diario, promoviendo el desarrollo continuo como base para nuestra gestión.

                Para ello contamos con valores como la pasión, la integridad, el compromiso y el trabajo en equipo.

                Te invitamos a que nos conozcas y te unas a nuestro equipo de trabajo</p>

            <div className='divcv' >
                <h2 className='cv'> MANDANOS TU CV <img className='mano' src="src\images\Contenido\mano.png" alt="" /></h2>


                <a href="https://www.instagram.com/ninasnoriega/">
                    <img className='imgredes' src="src\images\Footer\instagram.png" alt="" />
                </a>
            </div>



        </div>
    )
}

export default Trabaja
