import styled from "styled-components";
import colors from "../../global-styles/colors";

const Title = styled.h1`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : colors.absoluteLight)};
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  text-align: ${props => props.align ? props.align : 'center'};
  margin-bottom: ${props => props.bottom ? props.bottom : 0}rem;
`;

export default Title;
