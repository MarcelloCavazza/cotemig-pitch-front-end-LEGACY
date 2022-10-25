import React, { useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import video from "../../../assets/video.mp4";
import { fadeIn, leftIn } from "./Animations";
import SocialLinks from "./SocialLinks.jsx";
import Themis from "./Themis.jsx";
import LandingButton from "../../buttons/LandingButton";
import colors from "../../../global-styles/colors";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Welcome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.controls = true;
    videoRef.current.volume = 0.1;
    videoRef.current.currentTime = 0;
  }, []);

  return (
    <Section>
      <Header />
      <Content>
        <div>
          <h2>Consultoria Tech Themis</h2>
          <p>
            Você está cansado de procurar e procurar vários advogados na
            internet, ou pedir indicações para amigos, mas nunca com a certeza
            de que ele é realmente confiável? Então eu te apresento a CTT, uma
            empresa especializada em agilizar e facilitar o seu contato com
            advogados de confiança.
          </p>
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
      <Themis />
      <SocialLinks />
    </Section>
  );
};

const Content = styled.div`
  animation: ${leftIn} var(--duration) var(--fast) forwards;
  animation-delay: 0.1s;
  padding: 100px 50px 100px 150px;

  & h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
  }

  & p {
    font-size: 1rem;
    margin-top: 10px;
    color: white;
  }

  & video {
    margin: 1rem 0;
    border: 4px solid transparent;
    outline: 3px solid ${colors.logoGreenOne};
    border-radius: 0.5rem;
  }
`;

const Section = styled.section`
  position: relative;
  background-color: ${colors.backgroundDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  widows: 100%;

  &:before {
    animation: ${fadeIn} var(--duration) var(--fast-slow) forwards;
    animation-delay: 1s;
    opacity: 0;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.logoGreenOne};
    clip-path: var(--polygon);
  }
`;

export default Welcome;
