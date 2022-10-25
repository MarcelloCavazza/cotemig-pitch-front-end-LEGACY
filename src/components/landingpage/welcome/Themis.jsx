import React from "react";
import styled from "styled-components";
import { fadeIn } from "./Animations";
import themis from "../../../assets/themis-landing.png";
import "../../../global-styles/globalCss.css";

const Themis = () => {
  return (
    <Style>
      <img src={themis} alt="" />
    </Style>
  );
};

const Style = styled.div`
  position: relative;
  padding-right: 100px;

  & img {
    width: 350px;
    animation: ${fadeIn} var(--duration) var(--fast) forwards;
    animation-delay: 1.3s;
    opacity: 0;
    max-width: 400px;
  }
`;

export default Themis;
