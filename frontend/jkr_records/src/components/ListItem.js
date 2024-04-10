import React from 'react'


let getTitle = (song)=> {
  let title= song.nombre
  return title
}

let getFoto = (song)=> {
    let foto= song.foto
    return foto
  }

let getArtista = (song) => {
  let artista = song.artista
  console.log(artista)

  return artista
  
}

const ListItem = ({song}) => {
  return (
      <div className='songs-list-item'>
        <div>
      <h3>{getTitle(song)}</h3>
      <p>ID de artista: {getArtista(song)}</p>
      </div>
      <div><img src={getFoto(song)}></img></div>
      
      </div>

  )
}

export default ListItem