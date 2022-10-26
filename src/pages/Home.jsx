import React from "react";
import Footer from "../components/landingpage/footer/Footer.jsx";
import Welcome from "../components/landingpage/welcome/Welcome.jsx";
import Team from "../components/landingpage/team/Team.jsx";
import About from "../components/landingpage/about/About.jsx";
import Plans from "../components/landingpage/plans/Plans.jsx";
import Contact from "../components/landingpage/contact/Contact.jsx";
import ULine from "../components/landingpage/ULine.jsx";
import "../global-styles/globalCss.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <About id='about' />
      <ULine />
      <Plans id='plans' />
      <ULine />
      <Team id='team' />
      <ULine />
      <Contact id='contact' />
      <Footer />
    </>
  );
};

export default Home;
