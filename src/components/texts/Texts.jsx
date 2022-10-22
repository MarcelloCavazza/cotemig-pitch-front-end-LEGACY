import styled from "styled-components";
import colors from "../../global-styles/colors";

const Title = styled.h1`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : colors.absoluteDark)};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  text-align: center;
`;

export default Title;
