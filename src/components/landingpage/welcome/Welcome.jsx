import React, { useRef } from "react";
import styled from "styled-components";
import colors from "../../../global-styles/colors";
import Header from "./Header";
import SocialLinks from "./SocialLinks.jsx";
import Themis from "./Themis.jsx";
import HelloContent from "./HelloContent";
import { useEffect } from "react";

const Welcome = () => {
  return (
    <Section>
      <div className="section-container">
        <Header />
        <HelloContent />
        <SocialLinks />
        <Themis />
      </div>
    </Section>
  );
};



const Section = styled.section`
  & .section-container { 
    display: grid;
    place-items: left;
    align-items: center;
    position: relative;
    width: 90vw;
    height: 100vh;
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
    background-color: ${colors.logoGreenOne};
    clip-path: var(--polygon);
  }
`;

export default Welcome;
