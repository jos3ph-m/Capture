import React from 'react';
import home1 from '../img/home1.png'

import styled from 'styled-components';

const AboutSection = () => {
  return(
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span></h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography ideas that you have.  We have professionalswith amazing skills.</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Man with a camera"/>
      </div>
    </About>
  )
}

//Styled Component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export default AboutSection;