
import '../styles/Galeria.css'

const Galeria = () => {
    return (

        <div className='divgaleria' id='shop'>

            <h1 className='tit'>WELCOME TO NIÑAS NORIEGA</h1>
            <h4 className='tit2' >Explore our Successes</h4>

            <a href="/Pijamas">
                <img src="src\images\Galeria\pijama.jpg" alt="" className='imggaleria' />

                <p className='buttonimg1'>PIJAMAS</p>

            </a>




            <a href="/Batas">
                <img src="src\images\Galeria\bata.jpg" alt="" className='imggaleria' />

                <p className='buttonimg2'>BATAS</p>

            </a>



            <a href="/Ajuares">
                <img src="src\images\Galeria\ajuar.jpg" alt="" className='imggaleria' />
                <p className='buttonimg3'>AJUAR</p>

            </a>


        </div>


    )
}

export default Galeria



