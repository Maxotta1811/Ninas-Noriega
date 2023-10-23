import '../styles/App.css'
import Header from './Header';
import MyCarousel from './Carrousel'
import Galeria from './Galeria'
import Footer from './Footer'
import Nosotros from './Nosotros'
import Talles from './Talles'
import Trabaja from './Trabaja'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Batas from './Batas'
import Pijamas from './Pijamas'
import Ajuares from './Ajuares'



const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'
          
          element={
          <>
      
          <Header/>
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
<Batas/>
<Footer/>

</>

     }
     />


     
<Route path='/Pijamas'
     element={
<>  
<Header/>
<Pijamas/>
<Footer/>

</>

     }
     />


<Route path='/Ajuares'
     element={
<>  
<Header/>
<Ajuares/>
<Footer/>

</>

     }
     />



<Route path='/Nosotros'
     element={
<>  
<Header/>
<Nosotros/>
<Footer/>

</>

     }
     />

<Route path='/Talles'
     element={
<>  
<Header/>
<Talles/>
<Footer/>

</>

     }
     />


<Route path='/Trabaja'
     element={
<>  
<Header/>
<Trabaja/>
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




