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
        <div className='container-abt'></div>
        <div className='text-abt'>
        <h2>Nacimiento de una pasión por la música</h2>
  <p>
    JKR RECORDS nació en 2022 en Ecuador, impulsada por la pasión por la música y el deseo de descubrir y potenciar nuevos talentos. Somos una disquera independiente que se dedica a brindar apoyo integral a artistas con un gran potencial, guiándolos en el camino hacia el éxito.
  </p>

  <h2>Detrás del sueño: Un fundador visionario</h2>
  <p>
    Al frente de JKR RECORDS se encuentra un fundador único, cuya identidad prefiere mantener en el anonimato. Este visionario de la industria musical posee una amplia experiencia y un profundo conocimiento del panorama musical actual. Su objetivo principal es descubrir artistas excepcionales y ayudarlos a alcanzar su máximo potencial.
  </p>

  <h2>Nuestra Misión: El talento en el centro</h2>
  <p>
    En JKR RECORDS, nos apasiona identificar y firmar a artistas con un talento extraordinario, especialmente en los géneros Trap y Reggaetón. Sin embargo, estamos abiertos a explorar otros estilos musicales que nos cautiven y que consideremos tengan potencial para conectar con el público.
  </p>

  <h2>Más que una disquera, un equipo aliado</h2>
  <p>
    Nos enorgullece contar con un equipo experimentado y dedicado, compuesto por productores talentosos y un líder visionario en la gestión de disqueras y marketing. Cada miembro aporta su experiencia y pasión para brindar a nuestros artistas el apoyo integral que necesitan para triunfar.
  </p>

  <h2>Nuestro compromiso: Tu éxito, nuestro enfoque</h2>
  <p>
    En JKR RECORDS, el éxito de nuestros artistas es nuestra prioridad absoluta. Nos comprometemos a:<br />
    - Ofrecer adelantos financieros que permitan a nuestros artistas enfocarse en su música sin preocupaciones económicas.<br />
    - Gestionar su carrera de manera integral, incluyendo la producción musical, distribución, regalías y marketing.<br />
    - Proporcionarles las herramientas y el apoyo necesarios para desarrollar su talento y alcanzar su máximo potencial.<br />
    - Promocionar su música de manera efectiva, utilizando estrategias innovadoras y creativas que les permitan llegar a un público amplio.<br />
  </p>

  <h2>Un catálogo en constante crecimiento</h2>
  <p>
    A pesar de ser una disquera relativamente nueva, ya contamos con un catálogo de artistas prometedores, como Sebriant, un cantante con un gran futuro en la industria musical. Además, hemos tenido la oportunidad de colaborar con artistas como Agus B.C. en la distribución de su música.
  </p>

  <h2>Logros que nos inspiran</h2>
  <p>
    Nos llena de orgullo el éxito de nuestros artistas. Entre nuestros logros más destacados se encuentra el tema "EUROPEA" de Sebriant, que ha alcanzado un gran reconocimiento en el público.
  </p>

  <h2>Nuestro camino: La excelencia como brújula</h2>
  <p>
    En JKR RECORDS, creemos que el éxito se basa en tres pilares fundamentales:<br />
    - Música de la más alta calidad: Nos exigimos al máximo para ofrecer a nuestros artistas las mejores producciones musicales, utilizando tecnología de vanguardia y buscando siempre la innovación.<br />
    - Profesionalismo en cada paso: Trabajamos con ética, responsabilidad y dedicación en cada proyecto, brindando a nuestros artistas un servicio integral de excelencia.<br />
    - Enfoque en la carrera del artista: Nos convertimos en aliados estratégicos de nuestros artistas, guiándolos en la toma de decisiones y apoyándolos en cada etapa de su carrera.<br />
  </p>

  <h2>Un futuro brillante por delante</h2>
  <p>
    En JKR RECORDS, estamos convencidos de que lo mejor está por venir. Nos proyectamos como una de las disqueras independientes líderes en Ecuador, reconocida por nuestro compromiso con el talento, la calidad y la innovación.
  </p>

  <h2>Apostamos por la música fresca y revolucionaria</h2>
  <p>
    Para lograrlo, apostamos por producir música nueva de forma constante, buscando siempre sonidos frescos, innovadores y únicos que marquen la diferencia en el panorama musical. Creemos que la originalidad y la capacidad de sorprender son claves para el éxito en la industria actual.
  </p>

  <h2>Un mensaje de esperanza y perseverancia</h2>
  <p>
    En JKR RECORDS, estamos convencidos de que con talento, esfuerzo y un equipo adecuado, el éxito es posible. Queremos transmitir este mensaje a todos los artistas que sueñan con triunfar en la música: no se rindan, trabajen duro y busquen el apoyo de profesionales que compartan su pasión.
  </p>

  <h2>Únete a la familia JKR RECORDS</h2>
  <p>
    Si eres un artista con talento, pasión por la música y un gran potencial, te invitamos a unirte a la familia JKR RECORDS. Estamos buscando artistas comprometidos con su carrera y dispuestos a dar lo mejor de sí para alcanzar sus sueños.
  </p>
        </div>
      </div>
    </motion.div>
  );
}

export default BodyAbout;