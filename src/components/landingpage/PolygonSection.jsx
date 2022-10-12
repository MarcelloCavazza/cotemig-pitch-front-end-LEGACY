import React from 'react'
import styled from 'styled-components';
import Header from '../header/Header'
import SocialLinks from './SocialLinks.jsx';
import Themis from './Themis.jsx';
import colors from '../../global-styles/colors';
import { Link } from 'react-router-dom';


const PolygonSection = () => {
  return (
    <Section>
      <Content>
        <h2>Consultoria Tech Themis</h2>
        <p>Você está cansado de procurar e procurar vários advogados na internet, ou pedir indicações para amigos, mas nunca com a certeza de que ele érealmenteconfiável? Então eu te apresento a CTT, uma empresa especializada em agilizar e facilitar o seu contato com advogados de confiança.</p>
        <ButtonContainer>
          <Link to='/' className="play">Ver Vídeo</Link>
        {/* <a href="#" className="play" onClick="toggle();">Ver Vídeo</a> */}
          <Link to="/contact" className="play">Gostou da Ideia? Nos ajude...</Link>
        </ButtonContainer>
      </Content>
      <Themis />
      <Header />
      <SocialLinks />
    </Section>
  )
}

const ButtonContainer = styled.div`
  width: 28vw;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  animation: left-in var(--duration) var(--fast) forwards;
  animation-delay: .1s;
  opacity: 0;
  position: relative;
  padding: 100px 50px 100px 150px;

  & h2{
      font-size: 2.5em;
      font-weight: 800;
      color: #fff;
  }

  & p{
      font-size: 1.0em;
      margin-top: 10px;
      color: white;
  }

  & a{
      display: inline-block;
      position: relative;
      margin-top: 20px;
      padding: 10px 25px;
      background-color: ${colors.logoGreenOne};
      border-radius: 5px;
      color: white;   
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.95em;
      font-weight: 700;
      letter-spacing: 2px;
  }
`

const Section = styled.section`
    position: relative;
    background-color: ${colors.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    widows: 100%;

    &:before{
        animation: fade-in var(--duration) var(--fast-slow) forwards;
        animation-delay: 1s;
        opacity: 0;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${colors.logoGreenOne};
        clip-path: var(--polygon);
    }
  `

export default PolygonSection