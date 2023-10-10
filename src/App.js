import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';


import ScrollToTop from './components/ScrollToTOp';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <ScrollToTop />
         <NavBar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
       <Footer />
      
    </div>
  )
}

export default App