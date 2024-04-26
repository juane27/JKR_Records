import React from 'react'
import "./VideoLanding.css"
import video from '../../assets/video1.mp4'

const VideoLanding = () => {
  return (
    <div className='bgContainer'>
        <div className='overlay'>
            <video src={video} autoPlay loop muted />
        <div className='container2'>
            <h2 className='wlc'>THIS IS</h2>
            <h1 className='title'>JKR RECORDS</h1>
        </div>
        
        </div>
      
    </div>
  )
}

export default VideoLanding
