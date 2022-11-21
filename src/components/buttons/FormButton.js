import styled from "styled-components";
import colors from "../../global-styles/colors";

const FormButton = styled.button`
  font-family: inherit;
  padding: .9rem 1.7rem;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid ${colors.logoGreenOne};
  border-radius: 5px;
  background-color: ${(props) =>
    props.primary ? colors.logoGreenOne : "transparent"};
  color: ${(props) => (props.primary ? "black" : "white")};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  & a {
    color: inherit;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export default FormButton;
