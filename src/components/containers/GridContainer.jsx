import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  place-items: center;
  height: ${p => p.center ? '100vh' : 0};
`;

export default GridContainer;