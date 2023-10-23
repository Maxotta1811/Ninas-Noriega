import React from 'react'
import '../styles/Galeria.css'

const Galeria = () => {
    return (

        <div className='divgaleria'  id='shop'>

            <h1 className='tit'>WELCOME TO CUPID'S LOVE HOUSE</h1>

            <img src="src\images\Galeria\pijama.jpg" alt="" className='imggaleria' />
            <a href="/Pijamas">
                <p className='buttonimg1'>PIJAMAS</p>
                
            </a>
          
            


            <img src="src\images\Galeria\bata.jpg" alt="" className='imggaleria' />
            <a href="/Batas">
                <p className='buttonimg2'>BATAS</p>
                
            </a>
          

            <img src="src\images\Galeria\ajuar.jpg" alt="" className='imggaleria' />
            <a href="/Ajuares">
                <p className='buttonimg3'>AJUAR</p>
                
            </a>
          

        </div>

      
    )
}

export default Galeria



