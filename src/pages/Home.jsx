import React from "react";
import Footer from "../components/landingpage/footer/Footer.jsx";
import Welcome from "../components/landingpage/welcome/Welcome.jsx";
import Team from "../components/landingpage/team/Team.jsx";
import About from "../components/landingpage/about/About.jsx";
import Plans from "../components/landingpage/plans/Plans.jsx";
import "../global-styles/globalCss.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <About />
      <Plans />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
