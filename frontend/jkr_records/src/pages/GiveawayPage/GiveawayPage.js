import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GiveawayPage.css';
import "bootstrap/dist/css/bootstrap.min.css";   
import {logout,login, reset, getUserInfo} from '../../features/authSlice'
import  {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'; // Asegúrate de importar axios si no lo has hecho ya
import { GiPresent } from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";



// Objeto que mapea la posición con la imagen del premio
const premios = {
  1: { imagen: 'travis.jpg', titulo: 'Travis Scott x AJ1 Low Golf' },
  2: { imagen: 'badbunny.jpg', titulo: 'Aforo de Bad Bunny' },
  3: { imagen: 'dolares.png', titulo: '25 USD' },
  4: { imagen: 'dolares.png', titulo: '25 USD' },
  5: { imagen: 'dolares.png', titulo: '25 USD' },
  6: { imagen: 'dolares.png', titulo: '25 USD' },
  7: { imagen: 'dolares.png', titulo: '25 USD' },
  8: { imagen: 'dolares.png', titulo: '25 USD' },
  9: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  10: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  11: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  12: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  13: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  14: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  15: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  16: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  17: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  18: { imagen: 'spotify-premium.webp', titulo: 'Spotify Premium' },
  19: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  20: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  21: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  22: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  23: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  24: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  25: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  26: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  27: { imagen: 'youtube.png', titulo: 'Youtube Premium' },
  28: { imagen: 'youtube.png', titulo: 'Youtube Premium' },


  // Añade más posiciones y sus imágenes aquí según sea necesario
};

const PremioModal = ({ premio, closeModal }) => {
  return (
    <div className="modal" id="modal-gw">
      <div className="modal-content" id='modal-c'>
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>{premio.titulo}</h3>
        <div className='img-modal-gw'>
        <img className='img-gw-modal' src={premio.imagen} alt="Premio" />
        </div>
      </div>
    </div>
  );
};



const GiveawayPage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.user?.access); // Obtiene el token de acceso del estado Redux

  useEffect(() => {
    if (accessToken) {
      // Si hay un token de acceso válido, puedes usarlo para obtener la información del usuario u otras solicitudes
      dispatch(getUserInfo()); // Ejemplo de cómo llamar a una acción para obtener la información del usuario utilizando el token de acceso
    }
  }, [dispatch, accessToken]);

 ////OBTENER INFO USUARIO
 const [error, setError] = useState(null);

 const [userData, setUserData] = useState(null);
 useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await fetch('users/uinfo/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUserData(userData);

      // Agrega console.log aquí para ver la información del usuario
      console.log('Información del usuario:', userData.instagram);

    } catch (error) {
      setError(error.message);
    }
  };
  fetchUserData();
}, []);

  ///puntos usuarios y nombre
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPremio, setSelectedPremio] = useState(null);

  const handlePremioClick = (posicion) => {
    const premio = premios[posicion];
    setSelectedPremio(premio);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  
  //Color corona
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

  //
    const [userPoints, setUserPoints] = useState([]);

    useEffect(() => {
      fetch('/users/users')
        .then(response => response.json())
        .then(data => setUserPoints(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);

    ///FIN puntos usuarios y nombre

  /////Spotify points//////
  const [cooldownActive, setCooldownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [pointsClaimed, setPointsClaimed] = useState(true);  // Inicia como true para permitir el primer clic
  
  useEffect(() => {
    let countdownInterval;
    if (cooldownActive) {
      setTimeLeft(2); // Inicializa a 180 segundos al activar el cooldown
      countdownInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(countdownInterval);
  }, [cooldownActive]);
  
  const handleClickSpotify = () => {
    if (!cooldownActive && pointsClaimed) {
      setCooldownActive(true);
      setPointsClaimed(false);  // Asegura que el estado de reclamado se resetee
      window.open('https://open.spotify.com/album/3ATyARzUClXxigezJoPW5u', '_blank');
    } else if (cooldownActive && timeLeft === 0 && !pointsClaimed) {
      claimPoints();
    }
  };
  
  const claimPoints = () => {
    handleClaimPointsButtonClick(4)
    alert('JKR Points añadidos. Gracias por participar')
    
    setPointsClaimed(true);  // Actualiza el estado a reclamado
    setCooldownActive(false); // Finaliza el cooldown
    window.location.reload();

    
  };
  
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };



  
  /////Youtube points//////


  const [cooldownActive1, setCooldownActive1] = useState(false);
  const [timeLeft1, setTimeLeft1] = useState(0);
  const [pointsClaimed1, setPointsClaimed1] = useState(true);  // Inicia como true para permitir el primer clic
  
  useEffect(() => {
    let countdownInterval1;
    if (cooldownActive1) {
      setTimeLeft1(2); // Inicializa a 180 segundos al activar el cooldown
      countdownInterval1 = setInterval(() => {
        setTimeLeft1((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(countdownInterval1);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(countdownInterval1);
  }, [cooldownActive1]);
  
  const handleClickYoutube = () => {
    if (!cooldownActive1 && pointsClaimed1) {
      setCooldownActive1(true);
      setPointsClaimed1(false);  // Asegura que el estado de reclamado se resetee
      window.open('https://www.youtube.com/watch?v=Z49FPZtgav0&ab_channel=Sebriant', '_blank');
    } else if (cooldownActive1 && timeLeft1 === 0 && !pointsClaimed1) {
      claimPoints1();
    }
  };
  
  const claimPoints1 = () => {
    handleClaimPointsButtonClick(5)
    alert('JKR Points añadidos. Gracias por participar')
    
    setPointsClaimed1(true);  // Actualiza el estado a reclamado
    setCooldownActive1(false); // Finaliza el cooldown
    window.location.reload();

  };
  
  const formatTime1 = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  /////Fin youtube////
  


  // Estado para el botón de seguimiento en Instagram de JKR Records
  const [jkrFollowed, setJkrFollowed] = useState(false);
  // Estado para el botón de seguimiento en Instagram de Sebriant
  const [sebriantFollowed, setSebriantFollowed] = useState(false);
  const [sebriantLink, setSebriantLink] = useState('https://www.instagram.com/sebriant/');

  const handleSebriantFollow = () => {
    setSebriantFollowed(true);
    setSebriantLink('zzzzzzzz');
  };

  

  // PRIMER REQUISUITO...

  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showClaimPointsButton, setShowClaimPointsButton] = useState(false);
  const [showPuntosReclamados, setShowPuntosReclamados] = useState(false);
  const [instagramAccount, setInstagramAccount] = useState('');
  
  const handleButtonClick = () => {
    setShowButton(false);

    setShowForm(true);
    setShowPuntosReclamados(false)
  };
  
  const handleInputChange = (event) => {
    setInstagramAccount(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la cuenta de Instagram al backend (Django) para su procesamiento
    console.log('Cuenta de Instagram ingresada:', instagramAccount);
    setShowForm(false);
    setShowClaimPointsButton(true);
    setShowPuntosReclamados(false);
    // Puedes reiniciar el formulario o realizar alguna acción adicional aquí si lo deseas
  };


  ///RECLAMAR PUNTOS BOTON
  const handleClaimPointsButtonClick = (actionId) => {
    
   

    
    const url = `users/process-action/${actionId}/`; // Reemplaza tu-domino.com con tu dominio real
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
        // Si necesitas incluir algún token de autorización, puedes agregarlo aquí
      },
      // Si necesitas enviar algún cuerpo en la solicitud POST, puedes hacerlo aquí
      body: JSON.stringify({}),
    })
    .then(response => {
      if (response.ok) {
        console.log('Solicitud POST exitosa');
        setShowClaimPointsButton(false);
        setShowPuntosReclamados(true);
        // Aquí puedes manejar la respuesta si lo deseas
      } else {
        console.error('Error al realizar la solicitud POST');
        // Aquí puedes manejar el error si lo deseas
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
      // Aquí puedes manejar errores de red si lo deseas
    });
  };

  ///ENVIAR CUENTAS BOTON
  const handleSendAccountClick = (accountType, accountName) => {
    const url = 'users/post-account/'; 
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, 
      },
      body: JSON.stringify({  
        account_type: accountType,
        account_name: accountName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Solicitud POST exitosa');
          
          
          // Aquí puedes manejar la respuesta si lo deseas
        } else {
          console.error('Error al realizar la solicitud POST');
          // Aquí puedes manejar el error si lo deseas
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
        // Aquí puedes manejar errores de red si lo deseas
      });
  };

    // TERMINA PRIMER REQUISUITO... ///////
  ///////////////////////////////////////

    // SEGUNDO 2 REQUISUITO...

    const [showButton2, setShowButton2] = useState(true);
    const [showForm2, setShowForm2] = useState(false);
    const [showClaimPointsButton2, setShowClaimPointsButton2] = useState(false);
    const [showPuntosReclamados2, setShowPuntosReclamados2] = useState(false);
    const [instagramAccount2, setInstagramAccount2] = useState('');
    
    const handleButtonClick2 = () => {
      setShowButton2(false);
      setShowForm2(true);
      setShowPuntosReclamados2(false)
    };
    
    const handleInputChange2 = (event) => {
      setInstagramAccount2(event.target.value);
    };
    
    const handleSubmit2 = (event) => {
      event.preventDefault();
      // Aquí podrías enviar la cuenta de Instagram al backend (Django) para su procesamiento
      console.log('Cuenta de Instagram ingresada:', instagramAccount2);
      setShowForm2(false);
      setShowClaimPointsButton2(true);
      setShowPuntosReclamados2(false);
      // Puedes reiniciar el formulario o realizar alguna acción adicional aquí si lo deseas
    };
  
  
    ///RECLAMAR PUNTOS BOTON
    const handleClaimPointsButtonClick2 = (actionId) => {
      
     
  
      
      const url = `users/process-action/${actionId}/`; // Reemplaza tu-domino.com con tu dominio real
    
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
          // Si necesitas incluir algún token de autorización, puedes agregarlo aquí
        },
        // Si necesitas enviar algún cuerpo en la solicitud POST, puedes hacerlo aquí
        body: JSON.stringify({}),
      })
      .then(response => {
        if (response.ok) {
          console.log('Solicitud POST exitosa');
          setShowClaimPointsButton2(false);
          setShowPuntosReclamados2(true);
          // Aquí puedes manejar la respuesta si lo deseas
        } else {
          console.error('Error al realizar la solicitud POST');
          // Aquí puedes manejar el error si lo deseas
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
        // Aquí puedes manejar errores de red si lo deseas
      });
    };
  
    ///ENVIAR CUENTAS BOTON
    const handleSendAccountClick2 = (accountType, accountName) => {
      const url = 'users/post-account/'; // Reemplaza '/post-account/' con la URL de tu endpoint de Django
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, // Si necesitas incluir algún token de autorización
        },
        body: JSON.stringify({  
          account_type: accountType,
          account_name: accountName,
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Solicitud POST exitosa');
            
            
            // Aquí puedes manejar la respuesta si lo deseas
          } else {
            console.error('Error al realizar la solicitud POST');
            // Aquí puedes manejar el error si lo deseas
          }
        })
        .catch((error) => {
          console.error('Error de red:', error);
          // Aquí puedes manejar errores de red si lo deseas
        });
    };

      /////////////////TERMINA 2do Requisito ////////////////
      ///////////////////////////////////////////////////
     // Tercer 3 REQUISUITO...
     const [showButton3, setShowButton3] = useState(true);
     const [showForm3, setShowForm3] = useState(false);
     const [showClaimPointsButton3, setShowClaimPointsButton3] = useState(false);
     const [showPuntosReclamados3, setShowPuntosReclamados3] = useState(false);
     const [instagramAccount3, setInstagramAccount3] = useState('');
     
     const handleButtonClick3 = () => {
       setShowButton3(false);
       setShowForm3(true);
       setShowPuntosReclamados3(false)
     };
     
     const handleInputChange3 = (event) => {
       setInstagramAccount3(event.target.value);
     };
     
     const handleSubmit3 = (event) => {
       event.preventDefault();
       // Aquí podrías enviar la cuenta de Instagram al backend (Django) para su procesamiento
       console.log('Cuenta de Instagram ingresada:', instagramAccount3);
       setShowForm3(false);
       setShowClaimPointsButton3(true);
       setShowPuntosReclamados3(false);
       // Puedes reiniciar el formulario o realizar alguna acción adicional aquí si lo deseas
     };
   
   
     ///RECLAMAR PUNTOS BOTON
     const handleClaimPointsButtonClick3 = (actionId) => {
       
      
   
       
       const url = `users/process-action/${actionId}/`; // Reemplaza tu-domino.com con tu dominio real
     
       fetch(url, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           "Authorization": `Bearer ${accessToken}`
           // Si necesitas incluir algún token de autorización, puedes agregarlo aquí
         },
         // Si necesitas enviar algún cuerpo en la solicitud POST, puedes hacerlo aquí
         body: JSON.stringify({}),
       })
       .then(response => {
         if (response.ok) {
           console.log('Solicitud POST exitosa');
           setShowClaimPointsButton3(false);
           setShowPuntosReclamados3(true);
           // Aquí puedes manejar la respuesta si lo deseas
         } else {
           console.error('Error al realizar la solicitud POST');
           // Aquí puedes manejar el error si lo deseas
         }
       })
       .catch(error => {
         console.error('Error de red:', error);
         // Aquí puedes manejar errores de red si lo deseas
       });
     };
   
     ///ENVIAR CUENTAS BOTON
     const handleSendAccountClick3 = (accountType, accountName) => {
       const url = 'users/post-account/'; // Reemplaza '/post-account/' con la URL de tu endpoint de Django
       
       fetch(url, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${accessToken}`, // Si necesitas incluir algún token de autorización
         },
         body: JSON.stringify({  
           account_type: accountType,
           account_name: accountName,
         }),
       })
         .then((response) => {
           if (response.ok) {
             console.log('Solicitud POST exitosa');
             
             
             // Aquí puedes manejar la respuesta si lo deseas
           } else {
             console.error('Error al realizar la solicitud POST');
             // Aquí puedes manejar el error si lo deseas
           }
         })
         .catch((error) => {
           console.error('Error de red:', error);
           // Aquí puedes manejar errores de red si lo deseas
         });
     };






     ///Bloquear botones segun accion
     const userId = useSelector(state => state.auth.user?.id); 
     console.log(userId);// Accede al ID del usuario desde el estado global de Redux
     const [userActions, setUserActions] = useState([]);
     
     useEffect(() => {
      const fetchUserActions = async () => {
          try {
              const token = 'aquí_va_tu_bearer_token'; // Obten tu token de donde lo tengas
              const response = await fetch(`users/acciones/`, {
                  headers: {
                      'Authorization': `Bearer ${accessToken}`,
                      'Content-Type': 'application/json'
                  }
              });
              if (!response.ok) {
                  throw new Error('No se pudo obtener las acciones del usuario');
              }
              const data = await response.json();
              // Filtrar las acciones para excluir "ig_followed"
              const filteredActions = data.filter(action => action.accion === 1,2,3);
          
              console.log('filtered',filteredActions);
       
              setUserActions(data);
          } catch (error) {
              console.error('Error al obtener las acciones del usuario:', error);
          }
      };
      fetchUserActions();
  }, []);

  // Función para determinar si el usuario realizó la acción deseada
  const hasPerformedAction = (action) => {

      return userActions.some(userAction => userAction.accion === action);
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
        <div className='container-condiciones'>
          <h4>Condiciones:</h4>
          <p>
              Para participar por los premios debes ir sumando JKR Points al cumplir los requisitos que se mencionan abajo. Segun el ranking al finalizar el concurso se otorgaran los premios correspondientes. Todas las actividades seran verificadas.
          </p>
        </div>
        <div className='container-grid-giveaway'>
          <div>
          <h4>Requisitos</h4>
          <div className='container-grid-giveaway'>
          
            
            
            
            <div className='requisito'>
              <h3>
                Seguinos en Instagram:
                </h3> 
                
            {/* Seguir JKR Records IG */}
            {hasPerformedAction(1) ? (
  <p className='claimed-p'>Puntos reclamados.</p>
) : (
  <div>
    {showButton && (
      <a className='btn ac_btn' href='https://www.instagram.com/jkrrecords/' target='_blank' onClick={handleButtonClick}>
        Ir a Instagram
      </a>
    )}

    {showForm && (
      <form onSubmit={handleSubmit} className='form-req'>
        <input 
          type="text" 
          value={instagramAccount} // Utiliza instagramAccount en lugar de value
          name='ig1'
          onChange={handleInputChange} 
          placeholder="Ingresa tu IG"
        />
        <button className='btn ac_btn' type="submit" onClick={() => handleSendAccountClick('instagram', instagramAccount)}>Enviar</button>
      </form>
    )}

    {showClaimPointsButton && (
      <button className='btn ac_btn' onClick={() => {
        alert('Se verificara si sigues la cuenta de instagram, gracias por participar');
        handleClaimPointsButtonClick(1);
        window.location.reload();

      }}>
        Reclamar puntos
      </button>
    )}

    {showPuntosReclamados && (
      <h4>Puntos reclamados</h4>
    )}
  </div>
)}

             
              </div>
              <div className='requisito'>
              <h3>
                            {/* Seguir Sebriant IG */}
                            Seguí a Sebriant en Instagram:

                            </h3>
                            {hasPerformedAction(2) ? (
  <p className='claimed-p'>Puntos reclamados.</p>
) : (
  <>
    {showButton2 && (
      <a className='btn ac_btn' href='https://www.instagram.com/sebriantmusic/' target='_blank' onClick={handleButtonClick2}>
        Ir a Instagram
      </a>
    )}

    {showForm2 && (
      <form onSubmit={handleSubmit2} className='form-req'>
        <input 
          type="text" 
          name='ig2'
          value={instagramAccount2} // Utiliza instagramAccount en lugar de value
          onChange={handleInputChange2} 
          placeholder="Ingresa tu IG"
        />
        <button className='btn ac_btn' type="submit" onClick={() => handleSendAccountClick2('instagram', instagramAccount2)}>Enviar</button>
      </form>
    )}

    {showClaimPointsButton2 && (
      <button className='btn ac_btn' onClick={() => {
        alert('Se verificará si sigues la cuenta de Instagram, gracias por participar');
        handleClaimPointsButtonClick2(2);
        window.location.reload();

      }}>
        Reclamar puntos
      </button>
    )}

    {showPuntosReclamados2 && (
      <h4>Puntos reclamados</h4>
    )}
  </>
)}

             
              </div>
       
              <div className='requisito'>
              <h3>
                Seguí a Marian Soler en Instagram:
                </h3>
                
            {/* Seguir Marian IG */}
            {hasPerformedAction(3) ? (
                <p className='claimed-p'>Puntos reclamados.</p>
              ) : (
                <>
            {showButton3 && (
               <a className='btn ac_btn' href='https://www.instagram.com/marianvsoler/' target='_blank' onClick={handleButtonClick3}>
                   Ir a Instagram
              </a>
            )}

            {showForm3 && (
              <form onSubmit={handleSubmit3} className='form-req'>
                <input 
                  type="text" 
                  name='ig3'
                  value={instagramAccount3} // Utiliza instagramAccount en lugar de value
                  onChange={handleInputChange3} 
                  placeholder="Ingresa tu IG"
                  
                />
                <button className='btn ac_btn'  type="submit" onClick={() => handleSendAccountClick3('instagram', instagramAccount3)}>Enviar</button>
              </form>
            )}

            {showClaimPointsButton3 && (
              <button className='btn ac_btn' onClick={() => {
                alert('Se verificara si sigues la cuenta de instagram, gracias por participar');
                handleClaimPointsButtonClick3(3);
                window.location.reload();

              }}>
                Reclamar puntos
              </button>
              
            )}

            {showPuntosReclamados3 && (
              <h4>Puntos reclamados</h4>
              
              
            )}
              </>
)}
              
              </div>

              <div className='requisito'>
              <h3>
                
                Reproducí el nuevo tema en Spotify:
                </h3>
                <a className='btn ac_btn' href='#' onClick={handleClickSpotify}>
    {cooldownActive && !pointsClaimed ? (timeLeft > 0 ? `Reclamar puntos (${formatTime(timeLeft)})` : 'Reclamar puntos') : 'Escuchar'}
  </a>


                

                
             
              </div>
              <div className='requisito'>
              <h3>
                
                Reproducí el nuevo tema en Youtube:
                </h3>
                <a className='btn ac_btn' href='#' onClick={handleClickYoutube}>
                
                {cooldownActive1 && !pointsClaimed1 ? (timeLeft > 0 ? `Reclamar puntos (${formatTime(timeLeft)})` : 'Reclamar puntos') : 'Escuchar'}
                  </a>



                
             
              </div>
              {/* <div className='requisito'>
              <h3>
                
                Comentar en el video del tema en Youtube:
                

                
              </h3>
              </div>
              <div className='requisito'>
              <h3>
                
                Subi una story a Instagram etiquetando a @jkrrecords:
                

                
              </h3>
              </div> */}

            
         
           

          
               




   





            </div>
          </div>
          <div className=''>
            <h4>Ranking JKR</h4>
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
                {index < 3 ? (
                      <RiMedalFill style={{ color: medalColor(index), fontSize: "2em" }} />
                    ) : (
                      index + 1
                    )}
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.jkrpoints}</td>
                <td>
                <GiPresent
  onClick={() => handlePremioClick(index + 1)} // Se pasa la posición como argumento
  style={{ fontSize: "1.5em", cursor: "pointer" }}
/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modalOpen && <PremioModal premio={selectedPremio} closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GiveawayPage;