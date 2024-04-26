import React from 'react'
import "./BodyAbout.css";
import { motion } from "framer-motion"

const BodyAbout = () => {
  return (
    <motion.div 
    className='about-an'
    style={{backgroundColor: '#000'}}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    <div className='container-about'>
      <h1>ABOUT US</h1>
      <div className='container-abt'>
        <div className='about-img'>
          <img src='https://ranchohumilde.com/_next/image?url=%2Fimages%2Fjimmy-jb-roque.png&w=1080&q=75'></img>
        </div>
        <div className='text-abt'>
          <p>
              Joker Records, founded by CEO Johnny Blaze alongside co-founders Jay-Bee and Rocky in the vibrant streets of Miami in 2011, has emerged as a pioneering force in Latin music. With over 60 artists under its umbrella, the label is dedicated to revolutionizing the regional Mexican music scene. Dubbed as "corridos urbanos" or "trap corridos," Joker Records pushes boundaries, blending raw storytelling with modern hip-hop influences. From groundbreaking chart successes to its dedication to nurturing a worldwide movement, Joker Records transcends borders and redefines cultural norms.
              </p>
        </div>
        <div className='about-img'>
          <img src='https://ranchohumilde.com/_next/image?url=%2Fimages%2Fhomepage-main-image.jpg&w=1080&q=75'></img>
        </div>
        <div className='text-abt'>
          <p>
              Joker Records, founded by CEO Johnny Blaze alongside co-founders Jay-Bee and Rocky in the vibrant streets of Miami in 2011, has emerged as a pioneering force in Latin music. With over 60 artists under its umbrella, the label is dedicated to revolutionizing the regional Mexican music scene. Dubbed as "corridos urbanos" or "trap corridos," Joker Records pushes boundaries, blending raw storytelling with modern hip-hop influences. From groundbreaking chart successes to its dedication to nurturing a worldwide movement, Joker Records transcends borders and redefines cultural norms.
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default BodyAbout
