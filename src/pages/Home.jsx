import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/landingpage/footer/Footer.jsx';
import Welcome from '../components/landingpage/welcome/Welcome.jsx';
import Team from '../components/landingpage/team/Team.jsx';
import colors from '../global-styles/colors.js';
import '../global-styles/globalCss.css';

const Home = () => {

  return (
  <>
    <Welcome />
    <Team />
    <Footer />
  </>
  )
}

export default Home; 