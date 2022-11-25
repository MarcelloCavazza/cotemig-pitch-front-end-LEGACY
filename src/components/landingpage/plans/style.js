import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  
  & .cards-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &:first-child{
      margin-bottom: 2vh;
    }
  }
  
`

export default Section;