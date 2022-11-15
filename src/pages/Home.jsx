import React from "react";
import Footer from "../components/landingpage/footer/Footer.jsx";
import Welcome from "../components/landingpage/welcome/Welcome.jsx";
import Team from "../components/landingpage/team/Team.jsx";
import About from "../components/landingpage/about/About.jsx";
import Plans from "../components/landingpage/plans/Plans.jsx";
import Contact from "../components/landingpage/contact/Contact.jsx";
import ULine from "../components/landingpage/ULine.jsx";
import "../global-styles/globalCss.css";
import styled from "styled-components";

const Home = () => {
  return (
    <MainContainer>
      <div className="landing-container">
        <Welcome id='welcome' />
        <ULine />
        <About id='about' />
        <ULine />
        <Plans id='plans' />
        <ULine />
        <Team id='team' />
        <ULine />
        <Contact id='contact' />
      </div>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  & .landing-container {
    max-width: 90vw;
    width: 100vw;
  }
  display: flex;
  place-items: center;
  place-content: center;
  flex-direction: column;
`

export default Home;
