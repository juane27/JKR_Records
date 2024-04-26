import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route, useLocation
} from "react-router-dom";

import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";   
import ArtistsListPage from './pages/ArtistsPage/AritstsListPage'
import ProducersListPage from './pages/ProducersPage/ProducersListPage'
import ArtistPage from './pages/ArtistPage/ArtistPage'
import ProducerPage from './pages/ProducerPage/ProducerPage'
import SongsInfoPage from './pages/SongsInfoPage'
import Navbar from './components/NavBar/Navbar';
import VideoLanding from './components/VideoLanding/VideoLanding';
import Spacer from './components/Spacer/Spacer';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import Footer from './components/Footer/Footer';
import SectionThree from './components/SectionThree/SectionThree';
import BodyAbout from './components/BodyAbout/BodyAbout';
import ContactUs from './pages/ContactPage/ContactPage';  
import AnimatedCursor from "react-animated-cursor"
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';


function App() {

  return (
    <Router>
      <div className="container-dark">
        <div className="app">
        <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: '#880316'
  }}
  outerStyle={{
    border: '3px solid #fff'
  }}
/>         <Navbar />


          
        <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
