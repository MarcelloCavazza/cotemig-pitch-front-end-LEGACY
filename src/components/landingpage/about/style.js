import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  & img {
    width: 30rem;
  }

  @media only screen and (max-width: 1024px) {
    & img {
      display: none;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
`
