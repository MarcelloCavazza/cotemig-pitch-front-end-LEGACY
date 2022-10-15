import styled from "styled-components";
import colors from "../../global-styles/colors";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  & .main {
    width: 85vw;
    height: 95vh;
    background-color: ${colors.backgroundLight};
    display: grid;
    grid-template-columns: 2fr 5fr;
  }

  & .message-container {
    background-color: ${colors.backgroundDark};
  }
`

export default MainContainer;