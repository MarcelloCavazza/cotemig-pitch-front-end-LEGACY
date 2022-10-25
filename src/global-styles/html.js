import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const HTML = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Rubik, sans-serif;
    min-height: 100vh;
    background-color: ${colors.backgroundDark};
    color: ${colors.absoluteDark};
  }

`;

export default HTML;
