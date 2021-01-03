import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <Toggle title="How do I start?">
        <div className="question">
          <div className="answer">
            <p>Green juice next level venmo tattooed sustainable.</p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What's the daily schedule?">
        <div className="question">
          <div className="answer">
            <p>
              Authentic etsy you probably haven't heard of them austin helvetica
              neutra schlitz. Brooklyn drinking vinegar cloud bread, adaptogen
              truffaut distillery migas viral keytar.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Do you have different payment methods?">
        <div className="question">
          <div className="answer">
            <p>Vegan PBR synth authentic.</p>
            <p>Adaptogen trust fund!</p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What products do you offer?">
        <div className="question">
          <div className="answer">
            <p>I'm baby knausgaard subway tile crucifix.</p>
          </div>
        </div>
      </Toggle>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
