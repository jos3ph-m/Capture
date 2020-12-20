import React from 'react';
import styled from 'styled-components';
import { About } from '../styles'

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any questions? <span>FAQ</span></h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
      </div>
      <div className="question">
        <h4>What's the daily schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
      </div>
      <div className="question">
        <h4>Do you have different payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
      </div>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span{
    display: block;
  }
`;

export default FaqSection;