import React from "react";
import Container from "./style";
import Themis from "./Themis";
import Info from "./Info";

const About = ({id}) => {
  return (
    <Container id={id}>
      <Themis />
      <Info />
    </Container>
  );
};

export default About;
