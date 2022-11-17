import styled from "styled-components";
import colors from "../../global-styles/colors";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  padding: 4rem 2rem;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, .023),
    rgba(0, 0, 0, .05),
    rgba(255, 255, 255, .023)
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  min-width: 320px;
  width: 30rem;
  gap: 1rem;

  .obligatory {
    color: gray;
  }

  & a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

`;

export default FormContainer;
