import { createGlobalStyle } from "styled-components";
import colors from "../../global-styles/colors";

const MainStyle = createGlobalStyle`
  /* Change element whyen hovered */
  & .styled:hover {
    border-color: ${colors.logoGreenOne}88;
  }

  /* Change label when element is hovered */
  & .styled:hover ~ & label {
    color: ${colors.logoGreenOne}88;
  }

  /* Change element when element is focus */
  & .styled:focus {
    border-color: ${colors.logoGreenOne};
  }

  /* Change label when element is focus and valid */
  & .styled:focus ~ & label,
  & .styled:valid ~ & label{
    color: ${colors.absoluteLight};

    & .obligatory {
    color: ${colors.invalidRed};
    }

  }

  /* Change element when invalid */
  & .styled:invalid,
  & option:invalid ~ & label{
    color: ${colors.disabledInput};
  }

  & .obligatory {
    font-weight: normal;
  }
`

export default MainStyle;