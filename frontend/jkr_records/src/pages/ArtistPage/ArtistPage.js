import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArtistPage.css';
import { motion } from "framer-motion"

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const fetchArtistById = async (id) => {
    try {
      const response = await fetch(`/api/artist/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching artist by ID');
    }
  };

  useEffect(() => {
    // Aquí deberías hacer una llamada a la API para obtener los detalles del artista basados en su ID
    // Suponiendo que tienes una función fetchArtistById que obtiene los detalles del artista por su ID
    fetchArtistById(id)
      .then(artistData => {
        setArtist(artistData);
      })
      .catch(error => {
        console.error('Error fetching artist:', error);
      });
  }, [id]);

  if (!artist) {
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
    <h1>{artist.nombre}</h1>
    <div className='container-artist'>
      
      <img src={artist.foto} alt={artist.nombre} />
      <div className='columna'>
      <p>{artist.descripcion}</p>
      <div className='redes-artist'>
      <a href={artist.instagram} target="_blank"><i className='fab fa-instagram'> </i></a>
      <a href={artist.twitter} target="_blank"><i className='fab fa-twitter'> </i></a>
      <a href={artist.youtube} target="_blank"><i className='fab fa-youtube'> </i></a>
      <a href={artist.spotify} target="_blank"><i className='fab fa-spotify'> </i></a>
      </div>
      </div>
      
      {/* Mostrar otros detalles del artista según sea necesario */}
    </div>
    </div>
    </motion.div>
  );
}

export default ArtistPage;