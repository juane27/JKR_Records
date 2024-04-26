import React from 'react';
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className='container-plsts'>

      <h1>PLAYLISTS</h1>


      <div className='container-playlists'>

      <div className='playlist'>
      <iframe className='playlist-embedded' src="https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ2jva?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className='playlist'>
      <iframe className='playlist-embedded' src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZjqjZMudx9T?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className='playlist'>
      <iframe className='playlist-embedded'  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2L0iB23Enbq?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>


      </div>
    </div>
  );
}

export default SectionTwo;
