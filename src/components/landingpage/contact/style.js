import styled from "styled-components";
import colors from '../../../global-styles/colors'

const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  & .message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    background: linear-gradient(
      45deg, 
      rgba(255, 255, 255, 0.023),
      rgba(0, 0, 0, 0.05),
      rgba(255, 255, 255, 0.023)
    );
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    padding: 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);

    & hr {
      width: 75%;
      margin-top: 1rem;
      border-color: rgba(255, 255, 255, .5);
    }

    & .input-container {
      width: 100%;
      display: flex;
      flex-direction: column;

      & input,
      & textarea {
        padding: .7rem 1rem;
        margin: .4rem 0;
        background-color: transparent;
        color: white;
        font-family: inherit;
        font-size: 1rem;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: .5rem;
        &:focus {
          outline: 0;
          border-color: rgba(255, 255, 255, .5);
        }
      }

      & textarea {
        resize: none;
      }

    }

    & .contact-container {
      margin: 1rem 0;
      grid-gap: 10px;
    }

    & button {
      margin-top: 0;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
      font-size: 1.1rem;
    }
  }
  
`

export default Section