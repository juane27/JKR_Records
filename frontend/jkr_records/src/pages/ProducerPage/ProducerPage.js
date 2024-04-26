import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProducerPage.css';
import { motion } from "framer-motion"

const ProducerPage = () => {
  const { id } = useParams();
  const [producer, setProducer] = useState(null);
  const fetchProducerById = async (id) => {
    try {
      const response = await fetch(`/api/producer/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching artist by ID');
    }
  };

  useEffect(() => {
    // Aquí deberías hacer una llamada a la API para obtener los detalles del artista basados en su ID
    // Suponiendo que tienes una función fetchArtistById que obtiene los detalles del artista por su ID
    fetchProducerById(id)
      .then(producerData => {
        setProducer(producerData);
      })
      .catch(error => {
        console.error('Error fetching artist:', error);
      });
  }, [id]);

  if (!producer) {
    return <div>Cargando...</div>;
  }

  return (
    <motion.div 
    
    className='about-an'
    style={{backgroundColor: '#000'}}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    <div className='container-artist-main'>
    <h1>{producer.nombre}</h1>
    <div className='container-artist'>
      
      <img src={producer.foto} alt={producer.nombre} />
      <div className='columna'>
      <p>{producer.descripcion}</p>
      <div className='redes-artist'>
      <a href={producer.instagram} target="_blank"><i className='fab fa-instagram'> </i></a>
      <a href={producer.twitter} target="_blank"><i className='fab fa-twitter'> </i></a>
      <a href={producer.youtube} target="_blank"><i className='fab fa-youtube'> </i></a>
      <a href={producer.spotify} target="_blank"><i className='fab fa-spotify'> </i></a>
      </div>
      </div>
      
      {/* Mostrar otros detalles del artista según sea necesario */}
    </div>
    </div>
    </motion.div>
  );
}

export default ProducerPage;