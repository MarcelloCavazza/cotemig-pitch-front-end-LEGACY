import { createGlobalStyle } from "styled-components";
import colors from "../../styles/colors";

const MainStyle = createGlobalStyle`
  /* Change element whyen hovered */
  & .styled:hover {
    border-color: ${colors.green}88;
  }

  /* Change label when element is hovered */
  & .styled:hover ~ & label {
    color: ${colors.green}88;
  }

  /* Change element when its focus */
  & .styled:focus {
    border-color: ${colors.green};
  }

  /* Change label when element is focus and valid */
  & .styled:focus ~ & label,
  & .styled:valid ~ & label{
    color: ${colors.white};

    & .obligatory {
    color: ${colors.tomatoRed};
    }

  }

  /* Change element when invalid */
  & .styled:not(:valid),
  & .styled > & option:not(:valid) ~ & label{
    color: ${colors.disabledInput};
  }

  & .obligatory {
    font-weight: normal;
  }
`

export default MainStyle;