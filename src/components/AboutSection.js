import React from 'react';
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim } from '../animation';


const AboutSection = () => {

  return(
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
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