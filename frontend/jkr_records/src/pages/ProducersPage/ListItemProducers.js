import React from 'react'
import "./ProducersListPage.css";
import { Link } from 'react-router-dom';



let getName = (producer)=> {
  let name= producer.nombre
  return name
}

let getDescripcion = (producer)=> {
  let foto= producer.descripcion
  return foto
}

let getFoto = (producer)=> {
    let foto= producer.foto
    return foto
  }

let getProductor = (producer) => {
  let productor = producer.productor
  console.log(productor)

  return productor
  
}

{/* <p>Descripción: {getDescripcion(artist)}</p> */}

const ListItemProducers = ({producer}) => {
  return (
      <div className='artists-list-item'>

              <Link to={`/producer/${producer.id}`}>

   <div className='card-producer' style={{ backgroundImage: `url("${getFoto(producer)}")` }}>

    <div className='artist-name'>
      <h3>{getName(producer)}</h3>
      </div>
      <div className='golden-disc'>
      
      </div>
      
      {/* <img className='artist-image' src={getFoto(artist)}></img> */}
      
      </div>
      </Link>

      </div>

  )
}

export default ListItemProducers