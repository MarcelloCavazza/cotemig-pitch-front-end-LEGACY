import React from "react";
import styled from "styled-components";
import colors from "../../global-styles/colors";
import PropTypes from "prop-types";
import { InputStyle } from "./style";

export const Combobox = ({ id, name, children, title, onChange }) => {
  return (
    <>
      <InputStyle width={400}>
        <select
          placeholder={children}
          onChange={onChange}
          className="styled select"
          name={name}
          id={id}
        >
          {children}
        </select>
        <span className="arrow"></span>
      </InputStyle>
    </>
  );
};

export const Option = styled.option`
  color: ${colors.white};
`;

Combobox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

Combobox.defaultProps = {
  isRequired: false,
  title: "{{title}}",
};
