import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTOp';
import Footer from './components/Footer';
import SocialMediaIcons from './components/SocialMediaIcons';
import ScrollTop from './components/ScrollTop';
import Services from './pages/Services';
import Error from './components/Error';
import Properties from './pages/Properties';
import BestPlaces from './pages/Blogs/BestPlaces';
import TopReason from './pages/Blogs/TopReason';
import UltimateGuide from './pages/Blogs/UltimateGuide';
import Residential from './pages/Residential';
import TermsandConditions from './pages/TermsandConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProperty from './pages/SingleProperty';
import EnquiryButton from './components/EnquiryButton';


const App = () => {

  return (
    <div>
      <ScrollToTop />
         <NavBar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/properties/:place' element={ <Properties />} />
          <Route path='/best_places' element={ <BestPlaces />} />
          <Route path='/top_reasons' element={ <TopReason />} />
          <Route path='/ultimate_guide' element={ <UltimateGuide />} />
          <Route path='/property/:type' element={ <Residential />} />
          <Route path='/terms_and_conditions' element={ <TermsandConditions />} />
          <Route path='/privacy_policy' element={ <PrivacyPolicy />} />
          <Route path='/property-details/:id' element={ <SingleProperty />} />
          <Route path='/*' element={ <Error />} />
        </Routes>
        <SocialMediaIcons />
        <EnquiryButton />
        <ScrollTop />
       <Footer />
       
      
    </div>
  )
}

export default App