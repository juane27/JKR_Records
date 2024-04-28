import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route, useLocation
  } from "react-router-dom";


import ProducersListPage from '../../pages/ProducersPage/ProducersListPage'
import ArtistPage from '../../pages/ArtistPage/ArtistPage'
import ProducerPage from '../../pages/ProducerPage/ProducerPage'
import SongsInfoPage from '../../pages/SongsInfoPage'


import Spacer from '../Spacer/Spacer';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import Footer from '../Footer/Footer';
import SectionThree from '../SectionThree/SectionThree';
import BodyAbout from '../BodyAbout/BodyAbout';
import ContactUs from '../../pages/ContactPage/ContactPage';  
import VideoLanding from '../VideoLanding/VideoLanding';
import ArtistsListPage from '../../pages/ArtistsPage/AritstsListPage';
import { AnimatePresence } from "framer-motion"
import GiveawayPage from '../../pages/GiveawayPage/GiveawayPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ActivatePage from '../../pages/ActivatePage/ActivatePage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';
import ResetPasswordConfirmPage from '../../pages/ResetPasswordConfirmPage/ResetPasswordConfirmPage';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
          
    <Route path="/"  element={
      <>
        <VideoLanding/>
        <Spacer />
        <SectionTwo />
        <SectionThree />
        <SectionOne />
      
      </>
         }/>       
         
    <Route path="/about-us" element={
      <BodyAbout />
    } />     
    <Route path="/artists" element={<ArtistsListPage />} />
    <Route path="/producers" element={<ProducersListPage />} />
    
    <Route path="/contact-us" element={
      <ContactUs />
    } />             
    <Route path="/song/" element={<SongsInfoPage />} /> 
    <Route path="/artist/:id" element={<ArtistPage />} /> {/* Nueva ruta para la página del artista */}

    <Route path="/producer/:id" element={<ProducerPage />} /> {/* Nueva ruta para la página del artista */}
    <Route path="/giveaway" element={<GiveawayPage />} /> {/* Nueva ruta para la página del artista */}
    <Route path="/register" element={<RegisterPage /> } /> {/* Nueva ruta para la página del artista */}
    <Route path="/login" element={<LoginPage />} /> {/* Nueva ruta para la página del artista */}
    <Route path="/activate/:uid/:token" element={<ActivatePage />} />
    <Route path="/reset-password" element={<ResetPasswordPage />} />
    <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmPage />} />


    
 
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes
