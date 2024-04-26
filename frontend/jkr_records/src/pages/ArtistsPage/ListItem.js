import React from 'react'
import "./ArtistsListPage.css";
import { Link } from 'react-router-dom';


let getTitle = (artist)=> {
  let title= artist.nombre
  return title
}

let getDescripcion = (artist)=> {
  let foto= artist.descripcion
  return foto
}

let getFoto = (artist)=> {
    let foto= artist.foto
    return foto
  }

let getArtista = (artist) => {
  let artista = artist.artista
  console.log(artista)

  return artista
  
}

{/* <p>Descripción: {getDescripcion(artist)}</p> */}

const ListItem = ({artist}) => {
  return (
      <div className='artists-list-item'>

              <Link to={`/artist/${artist.id}`}>

   <div className='card-artist' style={{ backgroundImage: `url("${getFoto(artist)}")` }}>

    <div className='artist-name'>
      <h3>{getTitle(artist)}</h3>
      </div>
      
      
      {/* <img className='artist-image' src={getFoto(artist)}></img> */}
      
      </div>
      </Link>

      </div>

  )
}

export default ListItem