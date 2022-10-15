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
    display: grid;
    grid-template-columns: 2fr 5fr;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
`

export default MainContainer;