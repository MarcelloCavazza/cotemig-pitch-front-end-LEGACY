import styled, { createGlobalStyle } from "styled-components";
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

export const InputStyle = styled.div`
  position: relative;
  width: ${props => props.width ? props.width : 400}px;
  height: 50px;
  margin: 10px 0;

  & .select,
  & .input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: inherit;
    padding: 0 1rem;
    margin: 0;
    font-family: inherit;
    border-radius: .5rem;
    color: ${colors.absoluteLight};
    border: 3px solid ${colors.disabledInput};
    background-color: ${colors.backgroundDark};
  }
`;

export default MainStyle;