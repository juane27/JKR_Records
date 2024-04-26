import React, { useState, useEffect } from 'react';
import './SongInfo.css'; 



function SongInfo() {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    fetch('/api/song-info/') 
      .then(response => response.json())
      .then(data => {
        setSongData(data);
      })
      .catch(error => console.error('Error fetching song info:', error));
  }, []);

  return (
    <div className="song-info-container">
      {songData ? (
        <div className="song-details">
          <div>
            <span><strong>Nombre de la canción:</strong></span>
            <div>{songData.track.name}</div>
          </div>
          <div>
            <span><strong>Artista:</strong></span>
            <div>{songData.track.artists[0].name}</div>
          </div>
          <div>
            <span><strong>Popularidad:</strong></span>
            <div>{songData.track.popularity}</div>
          </div>
          <div>
            <span><strong>Número de disco:</strong></span>
            <div>{songData.track.disc_number}</div>
          </div>
          <div>
            <span><strong>Duración:</strong></span>
            <div>{songData.track.duration_ms} ms</div>
          </div>
          <div>
            <span><strong>Explícito:</strong></span>
            <div>{songData.track.explicit ? 'Sí' : 'No'}</div>
          </div>
          <div>
            <span><strong>URL de la canción:</strong></span>
            <div><a href={songData.track.external_urls.spotify} target="_blank" rel="noreferrer">{songData.track.external_urls.spotify}</a></div>
          </div>
          <div>
            <span><strong>URL del álbum:</strong></span>
            <div><a href={songData.track.album.external_urls.spotify} target="_blank" rel="noreferrer">{songData.track.album.external_urls.spotify}</a></div>
          </div>
          <div>
            <span><strong>Fecha de lanzamiento del álbum:</strong></span>
            <div>{songData.track.album.release_date}</div>
          </div>
          <div>
            <span><strong>Número total de pistas en el álbum:</strong></span>
            <div>{songData.track.album.total_tracks}</div>
          </div>
          <div>
            <span><strong>URL de vista previa:</strong></span>
            <div>{songData.track.preview_url ? <a href={songData.track.preview_url} target="_blank" rel="noreferrer">Escuchar vista previa</a> : 'No disponible'}</div>
          </div>
          <div>
            <span><strong>Análisis URL:</strong></span>
            <div>{songData.features.analysis_url}</div>
          </div>
          <div>
            <span><strong>Tipo de pista:</strong></span>
            <div>{songData.features.type}</div>
          </div>
          <div>
            <span><strong>ID de pista:</strong></span>
            <div>{songData.features.id}</div>
          </div>
          <div>
            <span><strong>URI de pista:</strong></span>
            <div>{songData.features.uri}</div>
          </div>
          <div>
            <span><strong>Tempo:</strong></span>
            <div>{songData.features.tempo}</div>
          </div>
          <div>
            <span><strong>Modo:</strong></span>
            <div>{songData.features.mode}</div>
          </div>
          <div>
            <span><strong>Tiempo de firma:</strong></span>
            <div>{songData.features.time_signature}</div>
          </div>
          <div>
            <span><strong>Bailabilidad:</strong></span>
            <div>{songData.features.danceability}</div>
          </div>
          <div>
            <span><strong>Energía:</strong></span>
            <div>{songData.features.energy}</div>
          </div>
          <div>
            <span><strong>Clave:</strong></span>
            <div>{songData.features.key}</div>
          </div>
          <div>
            <span><strong>Loudness:</strong></span>
            <div>{songData.features.loudness}</div>
          </div>
          <div>
            <span><strong>Speechiness:</strong></span>
            <div>{songData.features.speechiness}</div>
          </div>
          <div>
            <span><strong>Acousticness:</strong></span>
            <div>{songData.features.acousticness}</div>
          </div>
          <div>
            <span><strong>Instrumentalness:</strong></span>
            <div>{songData.features.instrumentalness}</div>
          </div>
          <div>
            <span><strong>Vivacidad:</strong></span>
            <div>{songData.features.liveness}</div>
          </div>
          <div>
            <span><strong>Valencia:</strong></span>
            <div>{songData.features.valence}</div>
          </div>
          <div className="album-cover">
            <img src={songData.track.album.images[0].url} alt="Album Cover" />
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
export default SongInfo;
