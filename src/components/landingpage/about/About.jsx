import React from "react";
import {Container} from "./style";
import themis from '../../../assets/completo.png';
import Info from "./Info";

const About = ({id}) => {
  return (
    <Container id={id}>
      <img src={themis}/>
      <Info />
    </Container>
  );
};

export default About;
