import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const HTML = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: Rubik, sans-serif;
    background-color: ${colors.backgroundDark};
    color: ${colors.absoluteDark};
  }

`;

export default HTML;