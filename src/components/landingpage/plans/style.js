import styled from "styled-components";

const Section = styled.div`
  width: 90%;
  min-height: 60vh;
  display: grid;
  place-items: center;
  grid-template-columns: 8fr 4fr;
  
  & .cards-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`

export default Section;