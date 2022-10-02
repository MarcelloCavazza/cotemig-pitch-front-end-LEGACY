import styled from "styled-components";
import colors from "../../global-styles/colors";

const Button = styled.button`
  font-family: inherit;
  padding: 15px 30px;
  font-size: 14pt;
  font-weight: bold;
  border: 3px solid ${colors.logoGreenOne};
  border-radius: 15px;
  background-color: ${props => props.primary ? colors.logoGreenOne : 'transparent'};
  color: ${props => props.primary ? 'black' : 'white'};
  
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export default Button;