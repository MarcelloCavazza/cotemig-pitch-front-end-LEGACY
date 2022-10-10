import styled from "styled-components";
import colors from "../../global-styles/colors";
import React from "react";
import IsRequired from "../extras/IsRequired.jsx";

const Label = ({id, children, isRequired}) => {
  return (
    <StyleLabel htmlFor={id}>
      {children}
      {isRequired ? <IsRequired /> : <></>}
    </StyleLabel>
  )
};

const StyleLabel = styled.label`
  position: absolute;
  top: -0.7rem;
  font-size: 12pt;
  font-weight: bold;
  left: 0.7rem;
  padding: 0 .4rem;
  color: white;
  cursor: text;
  border-radius: 5px;
  background-color: ${colors.backgroundDark};
  color: ${colors.disabledInput};
`

export default Label;