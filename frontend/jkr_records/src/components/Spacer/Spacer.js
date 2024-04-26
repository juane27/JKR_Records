import React, { useState, useEffect } from 'react';
import "./Spacer.css"
import Marquee from '../Marquee/Marquee.js'

const phrases1 = [
  "JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - JKR Records - Sebriant - ",
];
// JKR- REcords - Sebriant

// Todo en una sola frase.
const phrases2 = [
  "Esto es música - Forjando el futuro del sonido - Cultivando talentos, creando legados - Desafiando limites Esto es música - Forjando el futuro del sonido - Cultivando talentos, creando legados - Desafiando limites Esto es música - Forjando el futuro del sonido - Cultivando talentos, creando legados - Desafiando limites Esto es música - Forjando el futuro del sonido - Cultivando talentos, creando legados - Desafiando limites ",

];

const Spacer = () => {
  const [marqueeText1, setMarqueeText1] = useState("");
  const [marqueeText2, setMarqueeText2] = useState("");

  useEffect(() => {
    const randomPhrase1 = phrases1[Math.floor(Math.random() * phrases1.length)];
    const randomPhrase2 = phrases2[Math.floor(Math.random() * phrases2.length)];
    setMarqueeText1(randomPhrase1);
    setMarqueeText2(randomPhrase2);
  }, []);

  return (
    <div className='spacer-container'>
      <div className='spacer-overlay'></div>
      <div className='spacer-content'>
        <Marquee text={marqueeText1} initialPosition={-300} />
        <Marquee text={marqueeText2} repeat={true}  color='white' />
      </div>
    </div>
  );
}

export default Spacer;
