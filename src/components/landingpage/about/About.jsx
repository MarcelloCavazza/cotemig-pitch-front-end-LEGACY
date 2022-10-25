import React from "react";
import Container from "./style";
import themis from "../../../assets/completo.png";

const About = ({id}) => {
  return (
    <Container>
      <div className="sobreempresa" id={id}>
        <div className="imagem">
          <img src={themis} alt="" />
        </div>
        <div className="textosobre">
          <h2>CTT</h2>
          <p>Aposto que você cansou de perder seu tempo procurando um advogadopara consultoria. Já imaginou uma plataforma online, 24/7,confiável, segura e prática? Bom, você está à procura da CTT,Consultoria TechThemis. Com foco na sua segurança e privacidade dedados, com políticas empresariais seguindo à risca a LGPD e a OAB!Onde você pode encontrar advogados da sua região qualificados eeficientes. E sabe o melhor de tudo? Você consegue fazer issocompletamente de graça Com uma vasta variedade de advogados paraatender um mesmo tipo de processo que você deseje, te dando umgrande leque de opções para a resolução de seu problema. Por issomarque já sua consultoria!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
