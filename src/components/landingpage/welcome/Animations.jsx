import { keyframes } from "styled-components";

export const leftIn = keyframes`
  0%
  {
    transform: translateX(-200px);
    opacity: 0;
  }

  100%
  {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  0%
  {
    opacity: 0;
  }

  100%
  {
    opacity: 1;
  }
`;

export default { fadeIn, leftIn };
