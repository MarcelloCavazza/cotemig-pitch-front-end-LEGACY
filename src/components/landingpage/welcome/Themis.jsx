import React from "react";
import styled from "styled-components";
import { fadeIn } from "./Animations";
import themisLanding from "../../../assets/themis-landing.png";
import "../../../global-styles/globalCss.css";

const Themis = () => {
  return (
    <Style>
      <img src={themisLanding} />
    </Style>
  );
};

const Style = styled.div`
  grid-area: themis;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 350px;
    max-width: 400px;
  }
`;

export default Themis;
