import '../styles/App.css'
import Header from './Header';
import Navbar from './Navbar';
import Separator from './Separator';
import MyCarousel from './Carrousel'
import Galeria from './Galeria'
import Footer from './Footer'
import Nosotros from './Nosotros'
import Talles from './Talles'
import Trabaja from './Trabaja'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Batas from './Batas'
import Pijamas from './Pijamas'
import Ajuares from './Ajuares'
import  CarouselLegado from './Legado'



const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'
          
          element={
          <>
      
          <Header/>
          <Navbar/>
          <MyCarousel/>
          <Galeria/>
          <Nosotros/>
          <Footer/>

          </>

          }
                    
          />

     <Route path='/Batas'
     element={
<>  
<Header/>
<Navbar/>
<Separator/>
<Batas/>
<Footer/>

</>

     }
     />


     
<Route path='/Pijamas'
     element={
<>  
<Header/>
<Navbar/>
<Separator/>
<Pijamas/>
<Footer/>

</>

     }
     />


<Route path='/Ajuares'
     element={
<>  
<Header/>
<Navbar/>
<Separator/>
<Ajuares/>
<Footer/>

</>

     }
     />



<Route path='/Nosotros'
     element={
<>  
<Header/>
<Navbar/>
<Nosotros/>
<Footer/>

</>

     }
     />

<Route path='/Talles'
     element={
<>  
<Header/>
<Navbar/>
<Talles/>
<Footer/>

</>

     }
     />


<Route path='/Trabaja'
     element={
<>  
<Header/>
<Navbar/>
<Trabaja/>
<Footer/>

</>

     }
     />

     
<Route path='/Legado'
     element={
<>  
<Header/>
<Navbar/>
<Separator/>
<CarouselLegado/>
<Footer/>

</>

     }
     />


    </Routes>
    </Router>
    </>
  )
    }

export default App




