import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin-bottom: 25vh;
    font-family: Rubik, sans-serif;
    background-color: ${colors.backgroundBlack};
    color: ${colors.black};
  }

`;

export default GlobalStyle;