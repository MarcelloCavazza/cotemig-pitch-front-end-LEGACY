import React, { useEffect } from "react";
import styled, {keyframes} from "styled-components";
import colors from "../../../global-styles/colors";
import Header from "./Header";
import SocialLinks from "./SocialLinks.jsx";
import Themis from "./Themis.jsx";
import HelloContent from "./HelloContent";
import anime from "animejs";

const Welcome = () => {

  useEffect(() => {
    anime({
      targets: ['.nav', '.hello', '.links'],
      translateX: [250, 0],
      opacity: [0, 1],
      duration: 1250,
      easing: 'easeInOutQuad',
      delay: anime.stagger(200)
    })
    anime({
      targets: '.themis',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: 1250
    })
  })

  return (
    <Section>
      <div className="section-container">
        <Header className='nav'/>
        <HelloContent className='hello'/>
        <SocialLinks className='links'/>
        <Themis className='themis'/>
      </div>
    </Section>
  );
};


const opacity = keyframes`
  0%, 60%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Section = styled.section`
  & .section-container { 
    display: grid;
    place-items: center start;
    position: relative;
    width: 90vw;
    min-height: 100vh;
    grid-template-areas:
      'header themis'
      'hello  themis'
      'links  themis';
    grid-template-rows: 12vh 1fr 12vh;
    grid-template-columns: 10fr 1fr;
  }

  /* Polygon */
  &:before {
    content: ' ';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation-name: ${opacity};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    background-color: ${colors.logoGreenOne};
    clip-path: var(--polygon);
  }
`;


export default Welcome;
