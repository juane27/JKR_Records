import React, {useState, useEffect} from 'react'
import ListItemProducers from './ListItemProducers'
import "./ProducersListPage.css";
import { motion } from "framer-motion"

const ProducersListPage = () => {

  let [producers, setProducers] = useState([])

  useEffect(() => {
    getProducers()

  }, [])

  let getProducers = async() => {
    let response = await fetch('/api/producers/')
     let data = await response.json()
    setProducers(data)
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
      <h1>PRODUCERS</h1>
    

        <div className='artist-list'>
          {producers.map((producer, index) => (
            <ListItemProducers key={index} producer={producer}/>
          ))}
        </div>
   
      
    </div>
    </motion.div>
  )
}

export default ProducersListPage