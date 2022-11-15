import React from "react";
import { Link as Scroll } from 'react-scroll'
import {MdOutlineMail, MdPhone} from 'react-icons/md'
import styled from "styled-components";
import Text from "../Text";
import Title from "../../texts/Title";
import colors from "../../../global-styles/colors";
import FooterLink from './FooterLink.jsx'
import {FaGithubSquare, FaLinkedin, FaInstagramSquare, FaFacebookSquare} from 'react-icons/fa'

const scroll = {
  spy: true,
  smooth: true
}

const Footer = () => {
  return (
    <>
      <MainFooter>
        <div className="footer-section">
          <section className="one">
            <Title align='left' size={2}>Sobre</Title>
            <Text size={1}>É complicado procurar advogados na internet, mas você já passou por problemas para achar um, que seja confiável e que faça um bom trabalho? Demorou bastante para resolver aquele B.O?</Text>
            <Text size={1}>Pois bem, nós pensamos nesse problema e dedicamos a criar uma solução para ele! A Consultoria Tech Themis é uma empresa especializada em facilitar o seu contato com advogados de confiança. Oferecemos agiligade com os processos burocrativos, flexibilidade na hora de escolher o advogado perfeito e um atendimento 24/7. Venha conhecer a gente!</Text>
            <div className="socials">
              <FooterLink href='/' img={<FaFacebookSquare size={30} />} />
              <FooterLink href='/' img={<FaLinkedin size={30} />} />
              <FooterLink href='/' img={<FaInstagramSquare size={30} />} />
              <FooterLink href='https://github.com/MarcelloCavazza/cotemig-pitch-front-end.github.io' img={<FaGithubSquare size={30} />} />
            </div>
          </section>
          
          <section className="two">
            <Title align='left' size={2}>Links Rápidos</Title>
            <Text size={1}>
              <Scroll to='welcome' {...scroll}>Home</Scroll>
            </Text>
            <Text size={1}>
              <Scroll to='about' {...scroll}>Sobre Nós</Scroll>
            </Text>
            <Text size={1}>
              <Scroll to='plans' {...scroll}>Planos</Scroll>
            </Text>
            <Text size={1}>
              <Scroll to='team' {...scroll}>Equipe</Scroll>
            </Text>
            <Text size={1}>
              <Scroll to='contact' {...scroll}>Contato</Scroll>
            </Text>
          </section>
          
          <section className="three">
            <Title align='left' size={2}>Contato</Title>
            <div>
              <span><MdOutlineMail color="white"/></span>
              <Text size={1}>suporte.brasil@ctt.com</Text>
            </div>
            <div>
              <span><MdPhone color='white' /></span>
              <Text size={1}>+55 (31) 99711-3886</Text>
            </div>
          </section>
        </div>
        <section className="copyright">
          <Text size={1}>Copyright &copy; Consultoria Tech Themis 2022</Text>
        </section>
      </MainFooter>
    </>
  );
};

const MainFooter = styled.footer`
  width: 100%;
  padding: 2rem;
  background-color: ${colors.footerDark};
  display: flex;
  flex-direction: column;
  
  & .footer-section {
    gap: 3rem;
    display: flex;

    & .one {
      flex-grow: 1;
      flex-basis: 100%;
    }

    & .two {
      flex-grow: 1;
      flex-basis: 50%;
    }

    & .three {
      flex-grow: 1;
      flex-basis: 50%;

      & div {
        display: flex;

        & span {
          margin: .4rem;
          display: flex;
          align-items: center;

        }
      }
    }

    & span {
      margin-bottom: 1rem;
      & a:hover {
      text-decoration: underline;
      cursor: pointer;
      }
    }

    & .socials {
      display: flex;
    }
  }


  & .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    & span {
      text-align: center;
    }
  }

  @media only screen and (max-width: 1024px) {
    & .footer-section {
      flex-wrap: wrap;
    }
  }
`;
export default Footer;
