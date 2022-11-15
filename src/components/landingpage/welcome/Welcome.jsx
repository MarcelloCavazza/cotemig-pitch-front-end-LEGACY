import React from "react";
import Header from "./Header";
import SocialLinks from "./SocialLinks.jsx";
import Themis from "./Themis.jsx";
import HelloContent from "./HelloContent";
import {Section} from './style.js'

const Welcome = ({id}) => {

  return (
    <Section id={id}>
      <div className="section-container">
        <Header />
        <HelloContent />
        <SocialLinks />
      </div>
      <Themis />
    </Section>
  );
};

export default Welcome;