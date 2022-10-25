import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../global-styles/colors";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div className="sec sobre">
          <h2>Sobre</h2>
          <p>
            Você está cansado de procurar e procurar vários advogados na
            internet, ou pedir indicações para amigos, mas nunca com a certeza
            de que ele é realmente confiável? Então eu te apresento a CTT, uma
            empresa especializada em agilizar e facilitar o seu contato com
            advogados de confiança.
          </p>
          <ul className="icn">
            <li>
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-github"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sec quick">
          <h2>Links Rápidos</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/plans">Planos</Link>
            </li>
            <li>
              <Link to="/team">Equipe</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
          </ul>
        </div>
        <div className="sec lig">
          <h2>Contatos</h2>
          <ul className="tel">
            <li>
              <span>
                <i className="fas fa-envelope-square"></i>
              </span>
              <p>
                <a href="">suporteconsultoriatechthemis@gmail.com</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                <a href="">+55 (31) 99711-3886</a>
              </p>
            </li>
          </ul>
        </div>
      </FooterStyle>
      <Copyright>
        <p>TechThemis © 2021 - 2021</p>
      </Copyright>
    </>
  );
};

const FooterStyle = styled.footer`
  position: relative;
  height: auto;
  width: 100%;
  padding: 50px 100px;
  background-color: ${colors.footerDark};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 5vw;
  opacity: 1;

  & .sec {
    min-width: 10vw;
  }

  & h2 {
    position: relative;
    color: white;
    font-weight: 500;
    margin-bottom: 15px;
  }

  & p,
  & .lig .tel li span {
    color: ${colors.webLinks};
    opacity: 0.7;
  }

  & .icn {
    margin-top: 20px;
    display: flex;
  }

  & .icn li {
    list-style: none;
  }

  & .icn li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: ${colors.backgroundDark};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
  }

  & .icn li a:hover {
    background-color: ${colors.logoGreenOne};
  }

  & .icn li a .fab {
    color: white;
    font-size: 20px;
  }

  & .quick {
    position: relative;
    width: 25%;
  }

  & .quick ul li {
    list-style: none;
  }

  & .quick ul li a {
    color: ${colors.webLinks};
    opacity: 0.7;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
  }

  & .quick ul li a:hover,
  & .lig .tel li a:hover {
    opacity: 0.4;
  }

  & .lig {
    width: calc(35% - 60px);
    margin-right: 0 !important;
  }

  & .lig .tel {
    position: relative;
  }

  & .lig .tel li {
    margin-bottom: 16px;
    display: flex;
  }

  & .lig .tel li span:nth-child(1) {
    color: white;
    opacity: 1;
    font-size: 20px;
    margin-right: 10px;
  }

  & .lig .tel li a {
    color: ${colors.webLinks};
    opacity: 0.7;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  width: 100%;
  background-color: ${colors.footerDark};
  text-align: center;
  padding: 8px 100px;
  color: ${colors.webLinks};
`;

export default Footer;
