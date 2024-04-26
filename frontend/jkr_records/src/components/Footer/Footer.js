import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo-JKR1.png'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='logo-container-footer'>

      <img src={logo} className='logo-f'></img>

      </div>
      

      <div className='redes'>
      <a href='https://www.instagram.com/jkrrecords/' target="_blank"><i className='fab fa-instagram'> </i></a>
      <a href='https://www.instagram.com/jkrrecords/' target="_blank"><i className='fab fa-twitter'> </i></a>
      <a href='https://www.instagram.com/jkrrecords/' target="_blank"><i className='fab fa-youtube'> </i></a>
      <a href='https://www.instagram.com/jkrrecords/' target="_blank"><i className='fab fa-spotify'> </i></a>
      </div>

      <div className='copy-container'>
        <h3>
           COPYRIGHT © 2024/ JKR RECORDS ALL RIGHTS RESERVED
        </h3>
       </div>

      
    </div>
  )
}

export default Footer
