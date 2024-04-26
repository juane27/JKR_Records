import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GiveawayPage.css';
import "bootstrap/dist/css/bootstrap.min.css";   


const GiveawayPage = () => {
  const [cooldownActive, setCooldownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userPoints, setUserPoints] = useState([
    { username: 'Usuario1', points: 100 },
    { username: 'Usuario2', points: 80 },
    { username: 'Usuario3', points: 120 },
    // Agrega más usuarios según sea necesario
  ]);

  useEffect(() => {
    let cooldownTimer;
    if (cooldownActive) {
      cooldownTimer = setTimeout(() => {
        setCooldownActive(false);
        setTimeLeft(0);
      }, 3 * 60 * 1000); // 3 minutos en milisegundos
    }

    return () => clearTimeout(cooldownTimer);
  }, [cooldownActive]);

  useEffect(() => {
    let countdownInterval;
    if (cooldownActive) {
      countdownInterval = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000); // Actualiza cada segundo
    }

    return () => clearInterval(countdownInterval);
  }, [cooldownActive]);

  useEffect(() => {
    if (cooldownActive) {
      setTimeLeft(3 * 60); // 3 minutos en segundos
    }
  }, [cooldownActive]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  // Estado para el botón de seguimiento en Instagram de JKR Records
  const [jkrFollowed, setJkrFollowed] = useState(false);
  // Estado para el botón de seguimiento en Instagram de Sebriant
  const [sebriantFollowed, setSebriantFollowed] = useState(false);
  const [sebriantLink, setSebriantLink] = useState('https://www.instagram.com/sebriant/');

  const handleSebriantFollow = () => {
    setSebriantFollowed(true);
    setSebriantLink('zzzzzzzz');
  };

  

  const handleClick = () => {
    if (!cooldownActive) {
      setCooldownActive(true);
      // Aquí podrías agregar la lógica para la acción de escuchar el tema en Spotify
    } else {
      alert('Aún no han pasado 3 minutos desde el último clic');
    }
  };

  // Resto del código permanece igual...

  return (
    <motion.div
      className='giveaway-an'
      style={{ backgroundColor: '#000' }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className='container-giveaway'>
        <h1>Sorteo</h1>
        <div className='container-condiciones'>
          <h3>Condiciones:</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='container-grid-giveaway'>
          <div>
            <h3>Suma JKR Points:</h3>
            <ul>
              <li>
                Seguinos en Instagram:
                <button disabled={jkrFollowed} onClick={() => setJkrFollowed(true)}>
                  <a href='https://www.instagram.com/jkrrecords/' target='_blank'>
                    {jkrFollowed ? 'Reclamar puntos' : 'JKR Records IG'}
                  </a>
                </button>
              </li>
              <li>
                Seguí a Sebriant en Instagram:
                <button disabled={sebriantFollowed} onClick={() => {
                  setSebriantFollowed(true);
                }}>
                  <a href={sebriantFollowed ? 'NUEVO_ENLACEeeerrzzzsaa' : 'https://www.instagram.com/sebriant/'} target='_blank'>
                    {sebriantFollowed ? 'Reclamar puntos' : 'Sebriant IG'}
                  </a>
              </button>
              </li>
              <li>
                Reproducí el nuevo tema en Spotify:
                <button>
                  <a href='ENLACE_DE_SPOTIFY' target='_blank' onClick={handleClick}>
                    {cooldownActive ? `Reclamar puntos (${formatTime(timeLeft)})` : 'Escuchar'}
                  </a>
                </button>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3>Ranking JKR</h3>
            <table className="table table-hover ranking-table">
              <thead>
                <tr>
                  <th>Posición</th>
                  <th>Usuario</th>
                  <th>JKR Points</th>
                </tr>
              </thead>
              <tbody>
                {userPoints
                  .sort((a, b) => b.points - a.points)
                  .map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.points}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GiveawayPage;