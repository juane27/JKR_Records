import React, {useState, useEffect} from 'react'
import SongInfo from '../components/SongInfo/SongInfo';

const SongsInfoPage = () => {

  

  return (
    <div className='songs'>
      <div className='songs-header'>
        <h2 className='songs-title'>
           Data Cancion Spotify
        </h2>
        <SongInfo />


      </div>
   
    </div>
  )
}

export default SongsInfoPage