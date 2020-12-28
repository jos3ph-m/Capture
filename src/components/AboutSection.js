import React from 'react';
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'
// Framer Motion
import { motion } from 'framer-motion';


const AboutSection = () => {
  return(
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span></h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or videography ideas that you have.  We have professionalswith amazing skills.</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Man with a camera"/>
      </Image>
    </About>
  )
}

//Styled Component

export default AboutSection;