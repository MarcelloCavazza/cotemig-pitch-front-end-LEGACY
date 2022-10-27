import styled from "styled-components";

const Section = styled.div`
  width: 90%;
  min-height: 70vh;
  display: grid;
  place-items: center;
  grid-template-columns: 8fr 4fr;
  
  & .cards-container {
    width: 100%;
  }
`

export default Section;