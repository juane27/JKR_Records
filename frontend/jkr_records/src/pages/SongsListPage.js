import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'


const SongsListPage = () => {

  let [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs()

  }, [])

  let getSongs = async() => {
    let response = await fetch('/api/songs/')
    console.log('Response: ', response)
    let data = await response.json()
    console.log('Data: ', data)
    setSongs(data)
  }

  return (
    <div className='songs'>
      <div className='songs-header'>
        <h2 className='songs-title'>
           Canciones
        </h2>
        <p className='songs-count'>{songs.length} </p>
      </div>
      <div className='songs-list'>
        {songs.map((song, index) => (
          <ListItem key={index} song={song}/>
        ))}
      </div>
   
    </div>
  )
}

export default SongsListPage