import React from 'react'
import video from "../../../assets/video.mp4";
import LandingButton from "../../buttons/LandingButton";
import colors from "../../../global-styles/colors";
import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';

const HelloContent = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.controls = true;
    videoRef.current.volume = 0.1;
    videoRef.current.currentTime = 0;
  }, []);

  return (
    <Content>
      <div>
        <h2>Consultoria Tech Themis</h2>
        <p className='paragraph'>É complicado procurar advogados na internet, mas você já passou por problemas para achar um, que seja confiável e que faça um bom trabalho? Demorou bastante para resolver aquele B.O?</p>
        <p className='paragraph'>Pois bem, nós pensamos nesse problema e dedicamos a criar uma solução para ele! A <CTTSpan>Consultoria Tech Themis</CTTSpan> é uma empresa especializada em facilitar o seu contato com advogados de confiança. Oferecemos agiligade com os processos burocrativos, flexibilidade na hora de escolher o advogado perfeito e um atendimento 24/7. Venha conhecer a gente!</p>
      </div>
      <div>
        <video ref={videoRef} src={video}></video>
      </div>
      <div>
        <LandingButton href='contact'>
          Gostou da Ideia? Nos ajude...
        </LandingButton>
      </div>
    </Content>
  )
}

const Content = styled.div`
  grid-area: hello;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  & .paragraph {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;
    color: white;
    width: 70rem;
    margin: 0rem 0;
    text-align: justify;
  }

  & video {
    margin: .8rem 0 1.3rem 0;
    border: 4px solid transparent;
    outline: 3px solid ${colors.logoGreenOne};
    border-radius: 0.5rem;
  }
`;

export const CTTSpan = styled.span`
  font-weight: bold;
  color: ${colors.logoGreenOne};
`

export default HelloContent