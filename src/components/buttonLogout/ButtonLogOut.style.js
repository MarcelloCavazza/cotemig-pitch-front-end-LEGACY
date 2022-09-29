import styled from "styled-components";
import colors from "../../styles/colors";

const Button = styled.button`
  font-family: inherit;
  padding: 15px 30px;
  font-size: 14pt;
  font-weight: bold;
  border: 3px solid ${colors.black};
  border-radius: 15px;
  background-color: ${props => props.primary ? colors.black : 'transparent'};
  color: ${props => props.primary ? 'white' : 'black'};
  
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export default Button;