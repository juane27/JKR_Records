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

        </div>
        <div className='text-abt'>
          <p>
<strong>Nacimiento de una pasión por la música</strong><br><br>

JKR RECORDS nació en 2022 en Ecuador, impulsada por la pasión por la música y el deseo de descubrir y potenciar nuevos talentos. Somos una disquera <strong>independiente</strong> que se dedica a <strong>brindar apoyo integral a artistas con un gran potencial</strong>, guiándolos en el camino hacia el éxito.<br><br>

<strong>Detrás del sueño: Un fundador visionario</strong><br><br>

Al frente de JKR RECORDS se encuentra un <strong>fundador único, cuya identidad prefiere mantener en el anonimato. Este visionario de la industria musical posee una amplia experiencia y un profundo conocimiento del panorama musical actual. Su objetivo principal es descubrir artistas excepcionales</strong> y ayudarlos a alcanzar su máximo potencial.<br><br>

<strong>Nuestra Misión: El talento en el centro</strong><br><br>

En JKR RECORDS, nos apasiona <strong>identificar y firmar a artistas con un talento extraordinario, especialmente en los géneros Trap y Reggaetón. Sin embargo, estamos abiertos a explorar otros estilos musicales</strong> que nos cautiven y que consideremos tengan potencial para conectar con el público.<br><br>

<strong>Más que una disquera, un equipo aliado</strong><br><br>

Nos enorgullece contar con un <strong>equipo experimentado y dedicado, compuesto por productores talentosos</strong> y un <strong>líder visionario en la gestión de disqueras y marketing. Cada miembro aporta su experiencia y pasión para brindar a nuestros artistas el apoyo integral</strong> que necesitan para triunfar.<br><br>

<strong>Nuestro compromiso: Tu éxito, nuestro enfoque</strong><br><br>

En JKR RECORDS, <strong>el éxito de nuestros artistas es nuestra prioridad absoluta</strong>. Nos comprometemos a:<br>

- <strong>Ofrecer adelantos financieros</strong> que permitan a nuestros artistas enfocarse en su música sin preocupaciones económicas.<br>
- <strong>Gestionar su carrera de manera integral</strong>, incluyendo la producción musical, distribución, regalías y marketing.<br>
- <strong>Proporcionarles las herramientas y el apoyo</strong> necesarios para desarrollar su talento y alcanzar su máximo potencial.<br>
- <strong>Promocionar su música de manera efectiva</strong>, utilizando estrategias innovadoras y creativas que les permitan llegar a un público amplio.<br><br>

<strong>Un catálogo en constante crecimiento</strong><br><br>

A pesar de ser una disquera relativamente nueva, ya contamos con un <strong>catálogo de artistas prometedores, como Sebriant, un cantante con un gran futuro en la industria musical. Además, hemos tenido la oportunidad de colaborar con artistas como Agus B.C.</strong> en la distribución de su música.<br><br>

<strong>Logros que nos inspiran</strong><br><br>

Nos llena de orgullo el éxito de nuestros artistas. Entre nuestros logros más destacados se encuentra el tema <strong>"EUROPEA"</strong> de Sebriant, que ha alcanzado un gran reconocimiento en el público.<br><br>

<strong>Nuestro camino: La excelencia como brújula</strong><br><br>

En JKR RECORDS, creemos que el éxito se basa en tres pilares fundamentales:<br>

- <strong>Música de la más alta calidad:</strong> Nos exigimos al máximo para ofrecer a nuestros artistas las mejores producciones musicales, utilizando tecnología de vanguardia y buscando siempre la innovación.<br>
- <strong>Profesionalismo en cada paso:</strong> Trabajamos con ética, responsabilidad y dedicación en cada proyecto, brindando a nuestros artistas un servicio integral de excelencia.<br>
- <strong>Enfoque en la carrera del artista:</strong> Nos convertimos en aliados estratégicos de nuestros artistas, guiándolos en la toma de decisiones y apoyándolos en cada etapa de su carrera.<br><br>

<strong>Un futuro brillante por delante</strong><br><br>

En JKR RECORDS, estamos convencidos de que <strong>lo mejor está por venir. Nos proyectamos como una de las disqueras independientes líderes en Ecuador</strong>, reconocida por nuestro compromiso con el talento, la calidad y la innovación.<br><br>

<strong>Nuestro objetivo principal es llevar a Sebriant a lo más alto posible</strong>, consolidándolo como un referente en la industria musical y ayudándolo a alcanzar grandes logros, como la obtención de un disco de oro o un premio similar.<br><br>

<strong>Apostamos por la música fresca y revolucionaria</strong><br><br>

Para lograrlo, apostamos por <strong>producir música nueva de forma constante, buscando siempre sonidos frescos, innovadores y únicos</strong> que marquen la diferencia en el panorama musical. Creemos que la originalidad y la capacidad de sorprender son claves para el éxito en la industria actual.<br><br>

<strong>Un mensaje de esperanza y perseverancia</strong><br><br>

En JKR RECORDS, estamos convencidos de que <strong>con talento, esfuerzo y un equipo adecuado, el éxito es posible. Queremos transmitir este mensaje a todos los artistas que sueñan con triunfar en la música: no se rindan, trabajen duro y busquen el apoyo de profesionales que compartan su pasión</strong>.<br><br>

<strong>Únete a la familia JKR RECORDS</strong><br><br>

Si eres un artista con talento, pasión por la música y un gran potencial, te invitamos a unirte a la familia JKR RECORDS. Estamos buscando artistas comprometidos con su carrera y dispuestos a dar lo mejor de sí para alcanzar sus sueños.<br><br>

<strong>Con JKR RECORDS,</strong>

              </p>
        </div>
        </div>

    </motion.div>
  )
}

export default BodyAbout
