import styled from "styled-components";
import colors from "../../global-styles/colors";

export const InputStyle = styled.div`
  width: 100%;
  height: 3rem;
  // margin: .3rem auto;

  & select,
  & input {
    width: 100%;
    height: 100%;
    outline: none;
    font-size: inherit;
    padding: .6rem;
    font-family: inherit;
    border-radius: 0.3rem;
    color: white;
    border: 2px solid ${colors.disabledInput};
    background-color: transparent;

    &:focus,
    &:focus-within {
      border-color: ${colors.disableInputFocus};
    }
  }
`;

export default InputStyle;
