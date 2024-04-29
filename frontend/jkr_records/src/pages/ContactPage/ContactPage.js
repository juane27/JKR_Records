import React from "react"; 

import "./ContactPage.css";
import { motion } from "framer-motion"

export default function ContactUs() {
  

  return (
    <motion.div 
    
    className='about-an'
    style={{backgroundColor: '#000'}}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <div className="contact-container">
            <h1 className="display-4 mb-4">CONTACT US</h1>
            <h2 className="h2contact">Envíanos un correo a contacto@jkrrecords.net si quieres contactarnos.</h2>
         
        <div className="contact-form">

                 <form  className="contact__form">
             
                  <input className="form-control" id="name" name="name" placeholder="Name"  type="text"  required   />

                  <input className="form-control "  id="email"    name="email" placeholder="Email"         type="email"    required   />

              <textarea className="form-control " id="message" name="message" placeholder="Message" rows="5" required    ></textarea>
              <br />

                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>

            </form>
      </div>
      </div>
      </motion.div>
      
  );
}