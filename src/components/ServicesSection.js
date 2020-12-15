import React from 'react';

//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection;