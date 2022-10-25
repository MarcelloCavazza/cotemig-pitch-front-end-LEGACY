import { createGlobalStyle } from "styled-components";

const Neumorfismo = createGlobalStyle`
  .neumorph{
    box-shadow:
      -3px -3px 10px rgba(94, 104, 121, .288),
      3px 3px 10px rgba(0,0,0, .5);
  }
`;

export default Neumorfismo;
