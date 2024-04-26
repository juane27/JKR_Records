import React from 'react'
import "./SectionOne.css"

import Typewriter from "./TypeWriter";



const SectionOne = () => {
  
  return (
    <div className='container-section'>
        <h1 className='title'>About us</h1>
        <div className='text'>
       
        <p><Typewriter text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  delay={15}/></p>
       
        </div>
    </div>
  )
}

export default SectionOne
