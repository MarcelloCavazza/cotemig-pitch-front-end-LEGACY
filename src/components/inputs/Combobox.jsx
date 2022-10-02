import React from "react";
import styled from "styled-components";
import colors from "../../global-styles/colors";
import PropTypes from 'prop-types';
import StyleCombobox from './StyleCombobox';
import Label from "./Label";
import MainStyle from "./MainStyle";
import IsRequired from "../extra/IsRequired";

export const Combobox = ({id, name, children, title, onChange, isRequired}) => {
  return (
    <>
      <MainStyle />
      <StyleCombobox width={400}>
        <select placeholder="teste" onChange={onChange} className="styled select" name={name} id={id}>
          <Option disabled selected  value=''>Selectione uma opção</Option>
          {children}
        </select>
        <span className="arrow"></span>
        <Label isRequired className="label" htmlFor={id}>
          {title} {isRequired ? <IsRequired /> : null}
        </Label>
      </StyleCombobox>
    </>
  )
}

export const Option = styled.option`
  color: ${colors.absoluteLight};
`;

Combobox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

Combobox.defaultProps = {
  isRequired: false,
  title: '{{title}}'
}