import styled from "styled-components"
import colors from "../../styles/colors";

const StyleCombobox = styled.div`
  position: relative;
  width: ${props => props.width ? props.width : 400}px;
  height: 55px;
  margin: 15px 0;

  & .select {
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
    color: ${colors.white};
    border: 3px solid ${colors.disabledInput};
    background-color: ${colors.backgroundBlack};
  }
`;

export default StyleCombobox;