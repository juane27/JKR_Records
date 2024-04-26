import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import "./ArtistsListPage.css";
import { motion } from "framer-motion"




const ArtistsListPage = () => {

  let [artists, setArtists] = useState([])

  useEffect(() => {
    getArtists()

  }, [])

  let getArtists = async() => {
    let response = await fetch('/api/artists/')
     let data = await response.json()
    setArtists(data)
  }

  return (
    <motion.div 
    className='about-an'
    style={{backgroundColor: '#000'}}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    <div className='container-artists'>
    
      <h1>ARTISTS</h1>
    

        <div className='artist-list'>
        
          {artists.map((artist, index) => (
            <ListItem key={index} artist={artist}/>
          ))}
        </div>
   
      
    </div>
    </motion.div>
  )
}

export default ArtistsListPage