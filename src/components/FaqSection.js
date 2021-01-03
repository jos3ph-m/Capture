import React from 'react';
import styled from 'styled-components';
import { About } from '../styles'
import Toggle from './Toggle';

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any questions? <span>FAQ</span></h2>
      <Toggle>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="question">
        <h4>What's the daily schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="question">
        <h4>Do you have different payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;