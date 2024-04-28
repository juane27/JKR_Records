import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GiveawayPage.css';
import "bootstrap/dist/css/bootstrap.min.css";   
import {logout, reset, getUserInfo} from '../../features/auth/authSlice'
import  {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { RiMedalFill } from "react-icons/ri";
import { GiPresent } from "react-icons/gi";





const GiveawayPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getUserInfo()); // Esta acción debería cargar la información del usuario desde la API
  }, [dispatch]);



  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  let [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()

  }, [])

  let getUsers = async () => {
    try {
      let response = await fetch('/users/users/');
      let data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error('Error al obtener artistas:', error);
    }
  };



  const [cooldownActive, setCooldownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userPoints, setUserPoints] = useState([
    { username: 'Usuario1', points: 100 },
    { username: 'Usuario2', points: 80 },
    { username: 'Usuario4', points: 50 },
    { username: 'Usuario7', points: 20 },
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
    if (!sebriantFollowed) {
      setSebriantFollowed(true);
    }
  };

  useEffect(() => {
    if (sebriantFollowed) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.access}`,
          'Content-Type': 'application/json'
        }
      };
  
      fetch('/users/process-action/1/', requestOptions)
        .then(response => {
          // Manejar la respuesta como desees
        })
        .catch(error => {
          console.error('Error al procesar la acción:', error);
        });
    }
  }, [sebriantFollowed, user.access]);

  

  const handleClick = () => {
    if (!cooldownActive) {
      setCooldownActive(true);
      // Aquí podrías agregar la lógica para la acción de escuchar el tema en Spotify
    } else {
      alert('Aún no han pasado 3 minutos desde el último clic');
    }
  };

  // Resto del código permanece igual...

  const medalColor = (index) => {
    switch (index) {
      case 0:
        return "gold";
      case 1:
        return "silver";
      case 2:
        return "#bf8970";
      default:
        return "transparent";
    }
  };
  const [showTravisModal, setShowTravisModal] = useState(false);

  const handleMouseEnter = () => {
    setShowTravisModal(true);
  };

  const handleMouseLeave = () => {
    setShowTravisModal(false);
  };

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
        {/* <h1>Welcome, {userInfo.first_name} <RiMedalFill />
</h1> */}

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
              <a href='https://www.instagram.com/jkrrecords/' target='_blank' className='btn ac_btn' disabled={jkrFollowed} onClick={() => setJkrFollowed(true)}>
                {jkrFollowed ? 'Reclamar puntos' : 'JKR Records IG'}
              </a>
            </li>
            <li>
              Seguí a Sebriant en Instagram:
              <a href={sebriantFollowed ? 'NUEVO_ENLACEeeerrzzzsaa' : 'https://www.instagram.com/sebriant/'} target='_blank' className='btn ac_btn' disabled={sebriantFollowed} onClick={() => setSebriantFollowed(true)}>
                {sebriantFollowed ? 'Reclamar puntos' : 'Sebriant IG'}
              </a>
            </li>
            <li>
              Reproducí el nuevo tema en Spotify:
              <a href='ENLACE_DE_SPOTIFY' target='_blank' className='btn ac_btn' onClick={handleClick} disabled={cooldownActive}>
                {cooldownActive ? `Reclamar puntos (${formatTime(timeLeft)})` : 'Escuchar'}
              </a>
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
                <th>Premio</th>
              </tr>
            </thead>
            <tbody>
                {users
                  .sort((a, b) => b.jkrpoints - a.jkrpoints)
                  .map((user, index) => (
                    <tr key={index}>
                      <td>
                        {index < 3 && <RiMedalFill style={{ color: medalColor(index) }} />}
                        {index + 1}
                      </td>
                      <td>{user.first_name} {user.last_name}</td>
                      <td>{user.jkrpoints}</td>
                      <td>
                        
                          <span
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ fontSize: "1.5em" }}
                          ><GiPresent />


                    
                          </span>
                
                      </td>
                    </tr>
                  ))}
              </tbody>
          </table>
                      {/* Modal para "Travis" */}
                      {showTravisModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Premio de Travis</h2>
            <p>Aquí puedes agregar el contenido del premio de Travis.</p>
          </div>
        </div>
      )}
          </div>
         
        </div>
      </div>

    </motion.div>
  );
};

export default GiveawayPage;