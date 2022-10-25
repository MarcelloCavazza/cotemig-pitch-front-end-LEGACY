import styled from "styled-components";
import colors from "../../global-styles/colors";

const FormButton = styled.button`
  font-family: inherit;
  padding: 15px 30px;
  font-size: 14pt;
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
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export default FormButton;
