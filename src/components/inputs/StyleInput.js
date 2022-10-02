import styled from "styled-components"
import colors from "../../global-styles/colors";

export const StyleInput = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: 55px;
  margin: 15px 0;

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

export default StyleInput;